// Require express
const express = require('express');
const {
    createProduct, getStore, getProductById, deleteProduct,
} = require('../controllers/store');
const verifyToken = require('../middleware/verifyToken');

// Create a router object
const router = express.Router();

// Add the routes and the controller function that should handle the request
router.get('/', getStore);
router.get('/:id', getProductById);
router.use(verifyToken);
router.post('/', createProduct);

router.delete('/:id', deleteProduct);

module.exports = router;