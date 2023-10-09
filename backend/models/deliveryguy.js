const mongoose = require('mongoose');

const deliveryguySchema = new mongoose.Schema({
    id_delivery: { type: String, unique: true },
    name: String,
    firstname: String,
    statut: String,  // par exemple : disponible, en livraison, etc.
    position: {
        latitude: Number,
        longitude: Number
    },
    orders: [String],  // Liste des ID de commandes
    vehicle: String,  // par exemple : vélo, moto, voiture, etc.
    reviews: [String],  // Liste des avis
    date: { type: Date, default: Date.now }  // Date d'ajout du livreur
});

module.exports = mongoose.model('Deliveryguy', deliveryguySchema);
