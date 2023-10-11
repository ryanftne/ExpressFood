// routes/deliveryGuyRoutes.js

const express = require('express');
const router = express.Router();
const deliverGuyController = require('../controllers/deliverguyController');

// Vous définissez les routes ici, en les reliant aux fonctions de contrôleur appropriées
router.post('/', deliverGuyController.createDeliveryGuy);
router.get('/', deliverGuyController.getAllDeliveryGuys);
router.get('/:id', deliverGuyController.getDeliveryGuyById);
router.put('/:id', deliverGuyController.updateDeliveryGuy);
router.delete('/:id', deliverGuyController.deleteDeliveryGuy);

module.exports = router;
