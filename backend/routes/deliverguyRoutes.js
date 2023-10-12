// routes/deliveryGuyRoutes.js
const express = require('express');
const router = express.Router();
const deliveryGuyController = require('../controllers/deliveryGuyController');

router.get('/', deliveryGuyController.getDeliveryGuys);
router.post('/', deliveryGuyController.addDeliveryGuy);
router.get('/:id', deliveryGuyController.getDeliveryGuy);
router.put('/:id', deliveryGuyController.updateDeliveryGuy);
router.delete('/:id', deliveryGuyController.deleteDeliveryGuy);

module.exports = router;
