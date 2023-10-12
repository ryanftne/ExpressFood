const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    firstname: String,
    address: String,
    mail: { type: String, unique: true },
    phone: String,
    password: String,  
    review: [String],  
    payment_method: String
});

module.exports = mongoose.model('Client', clientSchema);
