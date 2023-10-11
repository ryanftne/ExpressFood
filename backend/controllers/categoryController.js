// controllers/categoryController.js

const Category = require('../models/category');

// Obtenir toutes les catégories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.json({ message: err });
    }
};

// Soumettre une catégorie
exports.submitCategory = async (req, res) => {
    const category = new Category({
        name: req.body.name
    });

    try {
        const savedCategory = await category.save();
        res.json(savedCategory);
    } catch (err) {
        res.json({ message: err });
    }
};

// Mises à jour spécifiques
//... vous pouvez ajouter d'autres fonctions pour gérer les mises à jour, la suppression, etc.
