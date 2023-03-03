const { Schema } = require("mongoose");

const Pedido = Schema({
  cliente: {
    nome: {
      type: String,
      required: true,
    },
    sobrenome: {
      type: String,
      required: true,
    },
  },
  pizzas: [
    {
      sabor: {
        type: String,
        required: true,
      },
      quantidade: {
        type: Number,
        required: true,
      },
      tamanho: {
        type: String,
        required: true,
        enum: ["Pequeno", "Medio", "Grande"],
      },
    },
  ],
  metodoDePagamento: {
    type: String,
    required: true,
    enum: ["PIX", "Cartao"],
  },
  total: {
    type: Number,
    required: true,
  },
  pago: {
    type: Boolean,
    default: false,
  },
});

module.exports = Pedido;
