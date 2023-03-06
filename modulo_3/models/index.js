const mongoose = require("mongoose");

const PedidoSchema = require("./pedido");
const PerfilSchema = require("./perfil");

const Pedido = mongoose.model("Pedido", PedidoSchema);
const Perfil = mongoose.model("Perfil", PerfilSchema, "perfil");

const connect = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/ebacpizza");
};

module.exports = {
  connect,
  Pedido,
  Perfil,
};
