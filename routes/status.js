const express = require('express');
const router = express.Router();
const Status = require('../models/status');

// Route pour ajouter un statut
router.post('/', async (req, res) => {
    try {
        const newStatus = new Status(req.body);
        await newStatus.save();
        res.status(201).send(newStatus);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add status' });
    }
});

// Route pour récupérer tous les statuts
router.get('/', async (req, res) => {
    try {
        const statuses = await Status.find();
        res.status(200).send(statuses);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch statuses' });
    }
});

// Autres routes

module.exports = router;
