const Client = require('../models/client'); 
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Ajouter un nouveau client
exports.addClient = async (req, res) => {
    try {
        // Vérifier si l'email existe déjà
        const existingClient = await Client.findOne({ mail: req.body.mail });
        if (existingClient) {
            return res.status(400).send({ error: 'Email already exists' });
        }

        // Hasher le mot de passe avant de sauvegarder le client
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPassword;

        const newClient = new Client(req.body);
        await newClient.save();
        res.status(201).send(newClient);
    } catch (error) {
        console.error(error); // log l'erreur dans la console du serveur
        res.status(500).send({ error: 'Failed to add client', message: error.message });
    }
};

// Obtenir tous les clients
exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).send(clients);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch clients' });
    }
};

// Obtenir un client par ID
exports.getClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (client) {
            res.status(200).send(client);
        } else {
            res.status(404).send({ message: 'Client not found' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch client' });
    }
};

// Mettre à jour un client
exports.updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedClient) {
            res.status(200).send(updatedClient);
        } else {
            res.status(404).send({ message: 'Client not found' });
        }
    } catch (error) {
        console.error(error); // log l'erreur dans la console du serveur
        res.status(500).send({ error: 'Failed to update client', message: error.message });
    }
};

// Supprimer un client
exports.deleteClient = async (req, res) => {
    try {
        const deletedClient = await Client.findByIdAndDelete(req.params.id);
        if (deletedClient) {
            res.status(200).send({ message: 'Client deleted successfully' });
        } else {
            res.status(404).send({ message: 'Client not found' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Failed to delete client' });
    }
};
