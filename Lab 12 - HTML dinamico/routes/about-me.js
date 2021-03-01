const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/biografia', (request, response, next) => {
    //response.sendFile(path.join(__dirname, '..', 'views', 'biografiaM.html'));
    response.render('biografiaM');
});

router.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = router;