// controllers/deliveryGuyController.js

const DeliveryGuy = require('../models/deliveryguy');

exports.createDeliveryGuy = async (req, res) => {
    try {
        const deliveryGuy = new DeliveryGuy(req.body);
        await deliveryGuy.save();
        res.status(201).send(deliveryGuy);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add delivery guy', message: error.message });
    }
};

// ... autres fonctions de contrôleur pour obtenir, mettre à jour, supprimer les livreurs
