const express = require('express');
const router = express.Router();
const path = require('path');
const jorgeController = require('../controllers/jorge');



router.get('/biografia', jorgeController.getBiografia);

router.get('/favorite-players', jorgeController.getFav)

router.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = router;