const mongoose = require("mongoose");
const { Perfil } = require("../models");

mongoose
  .connect("mongodb://127.0.0.1:27017/ebacpizza")
  .then(() => {
    console.log("mongo connection open!");
  })
  .catch((err) => {
    console.log(err);
  });

const perfilData = [
  {
    nome: "Bruno Vidigal",
    idade: 31,
  },
];
const dataSeeder = async () => {
  await Perfil.insertMany(perfilData);
};

dataSeeder().then(() => {
  mongoose.connection.close();
});
