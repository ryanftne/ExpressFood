const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Définition du schéma pour les utilisateurs
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    // vous pouvez ajouter d'autres champs ici selon vos besoins
    date: {
        type: Date,
        default: Date.now
    }
});

// Méthode pour hacher le mot de passe avant de sauvegarder l'utilisateur
userSchema.pre('save', async function(next) {
    // vérifie si le mot de passe est nouveau ou modifié
    if (!this.isModified('password')) return next();

    // Hacher le mot de passe
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Méthode pour vérifier le mot de passe
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

// Créer le modèle à partir du schéma
const User = mongoose.model('User', userSchema);

// Exporter le modèle
module.exports = User;
