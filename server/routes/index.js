// const express = require('express');
// const router = express.Router();

// const authRoutes = require('./authRoutes');
// const donationRoutes = require('./donationRoutes');

// router.use('/auth', authRoutes);
// router.use('/donations', donationRoutes);

// module.exports = router;// routes/index.js
const express = require('express');
const router = express.Router();

const ngoRoutes = require('./ngoRoutes');

router.use('/ngo', ngoRoutes); // <== THIS IS IMPORTANT

module.exports = router;
