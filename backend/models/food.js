const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category' // ceci doit correspondre au nom que vous avez utilisé lors de la création du modèle Category
    },
    image: String,  // URL ou chemin vers l'image du plat
    stock: Number,  // Quantité disponible en stock
    ingredient: [String],  // Liste des ingrédients
    daily_food: Boolean  // Si c'est un plat du jour ou non
});

module.exports = mongoose.model('Food', foodSchema);
