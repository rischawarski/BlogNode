const express = require('express');
const router = express.Router();

router.get('/article', (req, res) => {
    res.send('Rota Article');
});

router.get('/adm/article/new', (req, res) => {
    res.send('Rota ADM new');
});

module.exports = router;