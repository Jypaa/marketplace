const express = require('express');
const router = express.Router();
const { getUserById,loginUser, signUpUser } = require('../controllers/users');

router.get('/:id', getUserById);
router.post('/signup', signUpUser);
router.post('/login', loginUser);

module.exports = router;