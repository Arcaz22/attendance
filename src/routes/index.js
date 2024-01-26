const express = require('express');

const router = express.Router();
const userRoutes = require('./users');
const authRoutes = require('./auth');

router.get('/', (req, res) => {
  res.json({
    version: '3.9.0',
  });
});

router.use('/v1/user', userRoutes);
router.use('/v1/auth', authRoutes);

module.exports = router;