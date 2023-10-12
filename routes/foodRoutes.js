const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

// Route pour créer un nouveau plat
router.post('/', foodController.addFood);

// Route pour obtenir tous les plats
router.get('/', foodController.getFoods);

// Route pour obtenir un plat spécifique par son ID
router.get('/:id', foodController.getFood);

// Route pour mettre à jour un plat
router.put('/:id', foodController.updateFood);

// Route pour supprimer un plat
router.delete('/:id', foodController.deleteFood);

module.exports = router;
