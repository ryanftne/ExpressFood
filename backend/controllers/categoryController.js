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

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId);
        res.json(category);
    } catch (err) {
        res.json({ message: err });
    }
};

// Mettre à jour une catégorie
exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.categoryId,
            {
                $set: { name: req.body.name }  // ici, nous ne mettons à jour que le nom, mais vous pouvez étendre cela à d'autres propriétés
            },
            { new: true }  // cette option indique à mongoose de retourner la catégorie mise à jour
        );
        res.json(updatedCategory);
    } catch (err) {
        res.json({ message: err });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndRemove(req.params.categoryId);
        res.json({ message: 'Category successfully deleted' });
    } catch (err) {
        res.json({ message: err });
    }
};