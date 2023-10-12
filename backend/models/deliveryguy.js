// models/deliveryGuy.js
const mongoose = require('mongoose');

const deliveryGuySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'delivering'],
        default: 'available'
    },
    // autres champs nécessaires
});

module.exports = mongoose.model('DeliveryGuy', deliveryGuySchema);
