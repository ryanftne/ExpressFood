// routes/categoryRoutes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Routes
router.get('/', categoryController.getCategories);
router.post('/', categoryController.submitCategory);

//... autres routes pour supprimer, mettre à jour, etc.

module.exports = router;
