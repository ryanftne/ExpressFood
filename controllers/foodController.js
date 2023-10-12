const Food = require('../models/food'); // Assurez-vous que le chemin est correct

// Ajouter un nouveau plat
exports.addFood = async (req, res) => {
    try {
        const food = new Food(req.body);
        await food.save();
        res.status(201).send(food);
    } catch (error) {
        console.error(error); // log l'erreur dans la console du serveur
        res.status(500).send({ error: 'Failed to add food', message: error.message });
    }
};

// Obtenir tous les plats
exports.getFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).send(foods);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch foods' });
    }
};

// Obtenir un plat par ID
exports.getFood = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) return res.status(404).send({ error: 'Food not found' });
        res.status(200).send(food);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch food' });
    }
};

// Mettre à jour un plat
exports.updateFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!food) return res.status(404).send({ error: 'Food not found' });
        res.status(200).send(food);
    } catch (error) {
        res.status(500).send({ error: 'Failed to update food' });
    }
};

// Supprimer un plat
exports.deleteFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        if (!food) return res.status(404).send({ error: 'Food not found' });
        res.status(200).send({ message: 'Food deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete food' });
    }
};

exports.getFoods = async (req, res) => {
    try {
        const foods = await Food.find().populate('category');
        res.json(foods);
    } catch (err) {
        res.json({ message: err });
    }
};

// Obtenir un plat spécifique avec des détails de catégorie
exports.getFood = async (req, res) => {
    try {
        const food = await Food.findById(req.params.foodId).populate('category');
        res.json(food);
    } catch (err) {
        res.json({ message: err });
    }
};