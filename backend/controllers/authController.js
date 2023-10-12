const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../models/client');

// Fonction pour enregistrer un utilisateur
exports.register = async (req, res) => {
    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await Client.findOne({ mail: req.body.mail });
        if (existingUser) {
            return res.status(400).json({ message: "Un utilisateur avec cet e-mail existe déjà" });
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Créer un nouvel utilisateur
        const client = new Client({
            name: req.body.name,
            firstname: req.body.firstname,
            address: req.body.address,
            mail: req.body.mail,
            phone: req.body.phone,
            password: hashedPassword,
            // autres champs si nécessaire
        });

        const savedClient = await client.save();

        res.status(201).json(savedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fonction pour connecter un utilisateur
exports.login = async (req, res) => {
    try {
        // Vérifier si l'email existe
        const client = await Client.findOne({ mail: req.body.mail });
        if (!client) {
            return res.status(400).json({ message: "Aucun utilisateur trouvé avec cet e-mail" });
        }

        // Vérifier le mot de passe
        const validPass = await bcrypt.compare(req.body.password, client.password);
        if (!validPass) {
            return res.status(400).json({ message: "Mot de passe incorrect" });
        }

        // Créer et assigner un token
        const token = jwt.sign({ _id: client._id }, process.env.TOKEN_SECRET);
        res.header('auth-token', token).json({ token: token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
