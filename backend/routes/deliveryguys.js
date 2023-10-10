const express = require('express');
const router = express.Router();
const Deliveryguy = require('../models/deliveryguy');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Route pour ajouter un livreur
router.post('/', async (req, res) => {
    try {
        // Hashage du mot de passe avant de stocker le livreur
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        
        // Remplacement du mot de passe en clair par le mot de passe hashé
        req.body.password = hashedPassword;

        const newDeliveryguy = new Deliveryguy(req.body);
        await newDeliveryguy.save();
        res.status(201).send(newDeliveryguy);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add deliveryguy' });
    }
});

// Route pour récupérer tous les livreurs
router.get('/', async (req, res) => {
    try {
        const deliveryguys = await Deliveryguy.find();
        res.status(200).send(deliveryguys);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch delivery guys' });
    }
});

// Définissez d'autres routes pour mettre à jour, supprimer, obtenir un livreur par ID, etc.

module.exports = router;
