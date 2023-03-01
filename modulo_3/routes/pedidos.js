const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('pedidos/index', {
        nomeUsuario: "Bruno",
    });
});

module.exports = router;