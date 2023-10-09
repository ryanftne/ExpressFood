const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id_client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }, // Relié à la table Client
    food: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Food' }], // Relié à la table Food (en tant que liste car une commande peut avoir plusieurs aliments)
    id_livreur: { type: mongoose.Schema.Types.ObjectId, ref: 'Deliveryguy' }, // Relié à la table Deliveryguy
    statut: { type: mongoose.Schema.Types.ObjectId, ref: 'Status' }, // Relié à la table Status
    total: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
