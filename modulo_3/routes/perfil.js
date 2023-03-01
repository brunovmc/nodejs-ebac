const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('perfil/index', {
        nomeUsuario: "Bruno",
        sobrenome: "Vidigal",
        idade: 31,
        imagem: "https://avatars.githubusercontent.com/u/32459095?v=4",
        githubPage: "https://github.com/brunovmc",

    });
});

module.exports = router;