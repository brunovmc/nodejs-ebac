const carros = [
  {
    placa: "ABC1234",
    modelo: "tiguan",
    ano: 2020,
  },
  {
    placa: "XYZ4321",
    modelo: "sandero",
    ano: 2019,
  },
  {
    placa: "IJK2314",
    modelo: "gol",
    ano: 2013,
  },
  {
    placa: "DEF1324",
    modelo: "ka",
    ano: 2015,
  },
];

const listaAlfabetica = carros.sort((modelo1, modelo2) => {
  return modelo1.modelo.localeCompare(modelo2.modelo);
});

console.log(listaAlfabetica);
