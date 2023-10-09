const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Client = require('./models/client');


mongoose.connect('mongodb+srv://rfontaine:haha212@clusterexpressfood.f1o36c2.mongodb.net/Expressfood?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});


// Middleware pour analyser les requêtes JSON
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API d\'ExpressFood!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/api/clients', async (req, res) => {
    try {
        const newClient = new Client(req.body);  // Créez une nouvelle instance du modèle avec les données de la requête
        await newClient.save();  // Enregistrez le nouveau client dans la base de données
        res.status(201).send(newClient);  // Répondez avec le client ajouté
    } catch (error) {
        res.status(400).send({ error: 'Failed to add client' });
    }
});


