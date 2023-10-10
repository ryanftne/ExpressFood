const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const clientRoutes = require('./routes/clients');
const deliveryguyRoutes = require('./routes/deliveryguys');
const foodRoutes = require('./routes/foods');
const reviewRoutes = require('./routes/reviews');
const orderRoutes = require('./routes/orders');
const categoryRoutes = require('./routes/category');
const vehicleRoutes = require('./routes/vehicle');
const statusRoutes = require('./routes/status');

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

// Ajout des routes pour chaque composant
app.use('/api/clients', clientRoutes);
app.use('/api/deliveryguys', deliveryguyRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/statuses', statusRoutes);



// app.get('/api/foods/:id', async (req, res) => {
//     try {
//         const food = await Food.findById(req.params.id);  // Trouve un aliment par son ID
//         if (food) {
//             res.status(200).send(food);
//         } else {
//             res.status(404).send({ message: 'Food not found' });
//         }
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to fetch food' });
//     }
// });

// app.get('/api/reviews', async (req, res) => {
//     try {
//         const reviews = await Review.find();
//         res.status(200).send(reviews);
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to fetch reviews' });
//     }
// });


// app.put('/api/foods/:id', async (req, res) => {
//     try {
//         const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (updatedFood) {
//             res.status(200).send(updatedFood);
//         } else {
//             res.status(404).send({ message: 'Food not found' });
//         }
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to update food' });
//     }
// });

// app.delete('/api/foods/:id', async (req, res) => {
//     try {
//         const deletedFood = await Food.findByIdAndDelete(req.params.id);
//         if (deletedFood) {
//             res.status(200).send({ message: 'Food deleted successfully' });
//         } else {
//             res.status(404).send({ message: 'Food not found' });
//         }
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to delete food' });
//     }
// });

// app.post('/api/statuses', async (req, res) => {
//     try {
//         const newStatus = new Status(req.body);
//         await newStatus.save();
//         res.status(201).send(newStatus);
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to add status' });
//     }
// });

// app.post('/api/categories', async (req, res) => {
//     try {
//         const newCategorie = new Categorie(req.body);
//         await newCategorie.save();
//         res.status(201).send(newCategorie);
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to add categorie' });
//     }
// });

// app.post('/api/vehicles', async (req, res) => {
//     try {
//         const newVehicle = new Vehicle(req.body);
//         await newVehicle.save();
//         res.status(201).send(newVehicle);
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to add vehicle' });
//     }
// });

// app.post('/api/orders', async (req, res) => {
//     console.log("Data received:", req.body);  // Log des données reçues
//     try {
//         const newOrder = new Order(req.body);
//         await newOrder.save();
//         res.status(201).send(newOrder);
//     } catch (error) {
//         console.error("Error:", error);  // Log des erreurs
//         res.status(400).send({ error: 'Failed to add order' });
//     }
// });

// app.get('/api/orders', async (req, res) => {
//     try {
//         const orders = await Order.find().populate('id_client food id_livreur statut');
//         res.status(200).send(orders);
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to fetch orders' });
//     }
// });

// app.get('/api/orders/:id', async (req, res) => {
//     try {
//         const order = await Order.findById(req.params.id).populate('id_client food id_livreur statut');
//         if (order) {
//             res.status(200).send(order);
//         } else {
//             res.status(404).send({ message: 'Order not found' });
//         }
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to fetch order' });
//     }
// });

// app.put('/api/orders/:id', async (req, res) => {
//     try {
//         const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (updatedOrder) {
//             res.status(200).send(updatedOrder);
//         } else {
//             res.status(404).send({ message: 'Order not found' });
//         }
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to update order' });
//     }
// });

// app.delete('/api/orders/:id', async (req, res) => {
//     try {
//         const deletedOrder = await Order.findByIdAndDelete(req.params.id);
//         if (deletedOrder) {
//             res.status(200).send({ message: 'Order deleted successfully' });
//         } else {
//             res.status(404).send({ message: 'Order not found' });
//         }
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to delete order' });
//     }
// });

// app.get('/api/clients', async (req, res) => {
//     try {
//         const clients = await Client.find();
//         res.status(200).send(clients);
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to fetch clients' });
//     }
// });
