const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController'); // Assurez-vous que le chemin d'accès est correct

// Routes pour les clients
router.post('/', clientController.addClient);
router.get('/', clientController.getClients);
router.get('/:id', clientController.getClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
