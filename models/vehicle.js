const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    name: { type: String, unique: true }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
