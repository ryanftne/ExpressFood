// userController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Assurez-vous que le chemin est correct

// Fonction d'inscription
exports.register = async (req, res) => {
    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send({ error: 'Un utilisateur avec cet email existe déjà' });
        }

        // Hashage du mot de passe
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Création d'un nouvel utilisateur
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        // Sauvegarde de l'utilisateur dans la base de données
        const savedUser = await user.save();

        // Création d'un token JWT
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        // Réponse avec le token
        res.status(201).send({ accessToken: token });
    } catch (error) {
        res.status(500).send({ error: 'Une erreur est survenue lors de l\'inscription' });
    }
};

// Fonction de connexion
exports.login = async (req, res) => {
    try {
        // Vérification de l'existence de l'utilisateur
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({ error: 'Aucun utilisateur trouvé avec cet email' });
        }

        // Vérification du mot de passe
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send({ error: 'Mot de passe invalide' });
        }

        // Création d'un token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        // Réponse avec le token
        res.status(200).send({ accessToken: token });
    } catch (error) {
        res.status(500).send({ error: 'Une erreur est survenue lors de la connexion' });
    }
};
