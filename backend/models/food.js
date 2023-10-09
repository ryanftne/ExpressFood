const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    id_food: { type: String, unique: true },
    name: String,
    description: String,
    price: Number,
    category: String,  // par exemple : entrée, plat principal, dessert, etc.
    image: String,  // URL ou chemin vers l'image du plat
    stock: Number,  // Quantité disponible en stock
    ingredient: [String],  // Liste des ingrédients
    daily_food: Boolean  // Si c'est un plat du jour ou non
});

module.exports = mongoose.model('Food', foodSchema);
