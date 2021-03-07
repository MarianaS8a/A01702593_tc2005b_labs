const express = require('express');
const router = express.Router();
const path = require('path');

const marianaController = require('../controllers/mariana');

router.get('/biografia', marianaController.get);

router.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = router;