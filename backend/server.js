const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Deliveryguy = require('./models/deliveryguy');
const Food = require('./models/food');
const Client = require('./models/client');
const Review = require('./models/review');
const Status = require('./models/status');
const Categorie = require('./models/category'); 
const Vehicle = require('./models/vehicle'); 
const Order = require('./models/order'); 



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
        // Hashage du mot de passe avant de stocker le client
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        
        // Remplacement du mot de passe en clair par le mot de passe hashé
        req.body.password = hashedPassword;

        const newClient = new Client(req.body);
        const uuid = require('uuid');
        newClient.id = uuid.v4();
        await newClient.save();
        res.status(201).send(newClient);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add client' });
    }
});
// app.post('/api/clients', async (req, res) => {
//     try {
//         console.log("Data received:", req.body); // Ajoutez cette ligne pour afficher les données reçues
//         // Hashage du mot de passe avant de stocker le client
//         const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

//         // Remplacement du mot de passe en clair par le mot de passe hashé
//         req.body.password = hashedPassword;

//         const newClient = new Client(req.body);
//         const uuid = require('uuid');
//         newClient.id = uuid.v4();
//         await newClient.save();
//         console.log("Client added:", newClient); // Ajoutez cette ligne pour afficher le client ajouté
//         res.status(201).send(newClient);
//     } catch (error) {
//         console.error("Error while adding client:", error); // Ajoutez cette ligne pour afficher les erreurs
//         res.status(400).send({ error: 'Failed to add client' });
//     }
// });


app.post('/api/deliveryguys', async (req, res) => {
    try {
        const newDeliveryguy = new Deliveryguy(req.body);  // Créez une nouvelle instance du modèle avec les données de la requête
        await newDeliveryguy.save();  // Enregistrez le nouveau livreur dans la base de données
        res.status(201).send(newDeliveryguy);  // Répondez avec le livreur ajouté
    } catch (error) {
        res.status(400).send({ error: 'Failed to add deliveryguy' });
    }
});

app.post('/api/foods', async (req, res) => {
    try {
        const newFood = new Food(req.body);
        await newFood.save();
        res.status(201).send(newFood);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add food' });
    }
});

app.post('/api/reviews', async (req, res) => {
    try {
        const newReview = new Review(req.body);
        await newReview.save();
        res.status(201).send(newReview);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add review' });
    }
});

app.get('/api/foods', async (req, res) => {
    try {
        const foods = await Food.find();  // Trouve et retourne tous les aliments
        res.status(200).send(foods);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch foods' });
    }
});

app.get('/api/foods/:id', async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);  // Trouve un aliment par son ID
        if (food) {
            res.status(200).send(food);
        } else {
            res.status(404).send({ message: 'Food not found' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch food' });
    }
});

app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).send(reviews);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch reviews' });
    }
});

app.get('/api/deliveryguys', async (req, res) => {
    try {
        const deliveryguys = await Deliveryguy.find();
        res.status(200).send(deliveryguys);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch delivery guys' });
    }
});

app.put('/api/foods/:id', async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedFood) {
            res.status(200).send(updatedFood);
        } else {
            res.status(404).send({ message: 'Food not found' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Failed to update food' });
    }
});

app.delete('/api/foods/:id', async (req, res) => {
    try {
        const deletedFood = await Food.findByIdAndDelete(req.params.id);
        if (deletedFood) {
            res.status(200).send({ message: 'Food deleted successfully' });
        } else {
            res.status(404).send({ message: 'Food not found' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Failed to delete food' });
    }
});

app.post('/api/statuses', async (req, res) => {
    try {
        const newStatus = new Status(req.body);
        await newStatus.save();
        res.status(201).send(newStatus);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add status' });
    }
});

app.post('/api/categories', async (req, res) => {
    try {
        const newCategorie = new Categorie(req.body);
        await newCategorie.save();
        res.status(201).send(newCategorie);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add categorie' });
    }
});

app.post('/api/vehicles', async (req, res) => {
    try {
        const newVehicle = new Vehicle(req.body);
        await newVehicle.save();
        res.status(201).send(newVehicle);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add vehicle' });
    }
});

app.post('/api/orders', async (req, res) => {
    console.log("Data received:", req.body);  // Log des données reçues
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).send(newOrder);
    } catch (error) {
        console.error("Error:", error);  // Log des erreurs
        res.status(400).send({ error: 'Failed to add order' });
    }
});

app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find().populate('id_client food id_livreur statut');
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch orders' });
    }
});

app.get('/api/orders/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('id_client food id_livreur statut');
        if (order) {
            res.status(200).send(order);
        } else {
            res.status(404).send({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch order' });
    }
});

app.put('/api/orders/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedOrder) {
            res.status(200).send(updatedOrder);
        } else {
            res.status(404).send({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Failed to update order' });
    }
});

app.delete('/api/orders/:id', async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (deletedOrder) {
            res.status(200).send({ message: 'Order deleted successfully' });
        } else {
            res.status(404).send({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Failed to delete order' });
    }
});

app.get('/api/clients', async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).send(clients);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch clients' });
    }
});
