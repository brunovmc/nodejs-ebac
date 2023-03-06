const express = require("express");

const { Perfil } = require("../models");

const router = express.Router();

router.get("/", (_, res) => {
  Perfil.find({}).then((perfil) => {
    res.render("perfil/index", {
      perfil: perfil,
    });
  });
});

module.exports = router;
