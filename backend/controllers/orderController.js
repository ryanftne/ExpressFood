const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    try {
        const order = new Order({
            client: req.body.client, // utilisez 'client', pas 'clientId'
            food: req.body.food, // 'food' est maintenant un tableau d'objets
            deliveryAddress: req.body.deliveryAddress
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        console.log(req.body);
        res.status(500).json({ message: error.message });
    }
};

// Obtenir toutes les commandes
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('client').populate('food').populate('deliveryGuy');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtenir une commande spécifique
exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId).populate('client').populate('food.item').populate('deliveryGuy');
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour une commande
exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true });
        res.json(updatedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Supprimer une commande
exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.orderId);
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour le statut de la commande
exports.updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        order.status = req.body.status; // le statut est passé dans le corps de la requête
        await order.save();
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
