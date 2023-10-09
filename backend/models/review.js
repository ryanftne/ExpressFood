const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    id_review: { type: String, unique: true },
    author: String,  // ID du client ou du livreur
    content: String,
    rating: Number,  // par exemple, une échelle de 1 à 5
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
