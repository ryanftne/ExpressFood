const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    food: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    status: {
        type: String,
        enum: ['new', 'preparing', 'delivering', 'delivered'],
        default: 'new'
    },
    orderTime: {
        type: Date,
        default: Date.now
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    deliveryGuy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DeliveryGuy' // référence au modèle DeliveryGuy
    }

});

module.exports = mongoose.model('Order', orderSchema);
