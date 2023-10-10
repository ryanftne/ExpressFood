const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');

// Route pour ajouter un véhicule
router.post('/', async (req, res) => {
    try {
        const newVehicle = new Vehicle(req.body);
        await newVehicle.save();
        res.status(201).send(newVehicle);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add vehicle' });
    }
});

// Route pour récupérer tous les véhicules
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).send(vehicles);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch vehicles' });
    }
});

// Autres

module.exports = router;
