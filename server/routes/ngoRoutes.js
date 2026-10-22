const express = require('express');
const router = express.Router();
const { signupNGO, loginNGO } = require('../controllers/ngoController');


router.post('/signup', signupNGO);
router.post('/login',loginNGO);

module.exports = router;
