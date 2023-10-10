const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Route pour ajouter une commande
router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).send(newOrder);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add order' });
    }
});

// Route pour récupérer toutes les commandes
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch orders' });
    }
});

// autre routes

module.exports = router;
