const express = require('express');
const router = express.Router();
const Food = require('../models/food');

// Route pour ajouter un aliment
router.post('/', async (req, res) => {
    try {
        const newFood = new Food(req.body);
        await newFood.save();
        res.status(201).send(newFood);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add food' });
    }
});

// Route pour récupérer tous les aliments
router.get('/', async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).send(foods);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch foods' });
    }
});

// autres routes

module.exports = router;
