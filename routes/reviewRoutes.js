const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

// Route pour créer un nouvel avis
router.post('/', reviewController.createReview);

// Route pour obtenir les avis d'un plat spécifique
router.get('/food/:foodId', reviewController.getReviewsForFood);

// Ajoutez ici d'autres routes selon les besoins

module.exports = router;
