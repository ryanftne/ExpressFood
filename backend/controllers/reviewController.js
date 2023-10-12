const Review = require('../models/review');

// Créer un avis
exports.createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir tous les avis pour un plat
exports.getReviewsForFood = async (req, res) => {
    try {
        const reviews = await Review.find({ food: req.params.foodId }).populate('client');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajoutez ici d'autres contrôleurs selon les besoins, par exemple pour supprimer ou mettre à jour un avis
