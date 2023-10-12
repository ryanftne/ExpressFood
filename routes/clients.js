const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = express.Router();

const Client = require('../models/client');

router.post('/', async (req, res) => {
    try {
        // Hashage du mot de passe avant de stocker le client
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        // Remplacement du mot de passe en clair par le mot de passe hashé
        req.body.password = hashedPassword;

        const newClient = new Client(req.body);
        await newClient.save();
        res.status(201).send(newClient);
    } catch (error) {
        console.error("Error while adding client:", error);
        res.status(400).send({ error: 'Failed to add client' });
    }
});

router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).send(clients);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch clients' });
    }
});

module.exports = router;