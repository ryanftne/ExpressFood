const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Route pour ajouter une catégorie
router.post('/', async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).send(newCategory);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add category' });
    }
});

// Route pour récupérer toutes les catégories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch categories' });
    }
});

// Autre routes

module.exports = router;
