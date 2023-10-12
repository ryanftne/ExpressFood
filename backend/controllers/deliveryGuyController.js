// controllers/deliveryGuyController.js
const DeliveryGuy = require('../models/DeliveryGuy');

// Obtenir tous les livreurs
exports.getDeliveryGuys = async (req, res) => {
    try {
        const deliveryGuys = await DeliveryGuy.find();
        res.json(deliveryGuys);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Ajouter un nouveau livreur
exports.addDeliveryGuy = async (req, res) => {
    const deliveryGuy = new DeliveryGuy({
        name: req.body.name,
        phone: req.body.phone,
        status: req.body.status,
        // autres champs
    });

    try {
        const newDeliveryGuy = await deliveryGuy.save();
        res.status(201).json(newDeliveryGuy);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtenir un livreur spécifique
exports.getDeliveryGuy = async (req, res) => {
    try {
        const deliveryGuy = await DeliveryGuy.findById(req.params.id);
        res.json(deliveryGuy);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour un livreur
exports.updateDeliveryGuy = async (req, res) => {
    try {
        const updatedDeliveryGuy = await DeliveryGuy.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedDeliveryGuy);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un livreur
exports.deleteDeliveryGuy = async (req, res) => {
    try {
        await DeliveryGuy.findByIdAndDelete(req.params.id);
        res.json({ message: 'Delivery guy deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};