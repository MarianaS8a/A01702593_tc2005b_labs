const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/biografia', (request, response, next) => {
    //response.sendFile(path.join(__dirname, '..', 'views', 'biografiaJ.html'));
    response.render('biografiaJ');
});

router.get('/favorite-players',(request, response, next) => {
    response.render('fav');
});

router.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = router;