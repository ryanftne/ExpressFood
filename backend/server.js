const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config(); // Assurez-vous d'avoir un fichier .env à la racine de votre projet avec votre chaîne de connexion DB

// Connexion à MongoDB
(async function() {
    try {
        await mongoose.connect(process.env.DB_CONNECT, { // Utilisation de la variable d'environnement
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
})();

app.use(bodyParser.json());

// Import des routes
const categoryRoutes = require('./routes/categoryRoutes');
const clientRoutes = require('./routes/clientRoutes');
const authRoutes = require('./routes/authRoutes');
const auth = require('./middleware/authMiddleware');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Utilisation des routes
app.use('/api/categories', categoryRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/orders', orderRoutes);
//... autres routes

app.get('/private-route', auth, (req, res) => {
    res.send('This is a private route!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
