const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// Route pour ajouter un avis
router.post('/', async (req, res) => {
    try {
        const newReview = new Review(req.body);
        await newReview.save();
        res.status(201).send(newReview);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add review' });
    }
});

// Route pour récupérer tous les avis
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).send(reviews);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch reviews' });
    }
});

// Autre Chemin

module.exports = router;
