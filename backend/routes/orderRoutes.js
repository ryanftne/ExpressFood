const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Routes pour les commandes
router.post('/', orderController.createOrder);
router.get('/', orderController.getOrders);
router.get('/:orderId', orderController.getOrder);
router.put('/:orderId', orderController.updateOrder);
router.delete('/:orderId', orderController.deleteOrder);
router.put('/:orderId/status', orderController.updateOrderStatus); // route spéciale pour la mise à jour du statut
router.put('/update-status/:orderId', orderController.updateOrderStatus);

module.exports = router;
