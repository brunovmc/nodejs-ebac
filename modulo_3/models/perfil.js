const { Schema } = require("mongoose");

const Perfil = Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
});

module.exports = Perfil;
