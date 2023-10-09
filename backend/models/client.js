const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    name: String,
    firstname: String,
    address: String,
    mail: { type: String, unique: true },
    phone: String,
    password: String,  // Note: Dans un scénario réel, le mot de passe doit être hashé avant d'être stocké
    review: [String],  // Liste des avis
    payment_method: String
});

module.exports = mongoose.model('Client', clientSchema);
