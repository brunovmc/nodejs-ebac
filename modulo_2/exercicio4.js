const carros = [
  {
    placa: "ABC1232",
    modelo: "tiguan",
    ano: 2020,
  },
  {
    placa: "XYZ4321",
    modelo: "sandero",
    ano: 2019,
  },
  {
    placa: "IJK2319",
    modelo: "gol",
    ano: 2013,
  },
  {
    placa: "DEF1326",
    modelo: "ka",
    ano: 2015,
  },
];

const diaRodizio = (dia) => {
  if (dia === 0)
    return carros.filter(
      (placa) =>
        placa.placa.charAt(placa.placa.length - 1) == 1 ||
        placa.placa.charAt(placa.placa.length - 1) == 2
    );
  else if (dia === 1)
    return carros.filter(
      (placa) =>
        placa.placa.charAt(placa.placa.length - 1) == 3 ||
        placa.placa.charAt(placa.placa.length - 1) == 4
    );
  else if (dia === 2)
    return carros.filter(
      (placa) =>
        placa.placa.charAt(placa.placa.length - 1) == 5 ||
        placa.placa.charAt(placa.placa.length - 1) == 6
    );
  else if (dia === 3)
    return carros.filter(
      (placa) =>
        placa.placa.charAt(placa.placa.length - 1) == 7 ||
        placa.placa.charAt(placa.placa.length - 1) == 8
    );
  else if (dia === 4)
    return carros.filter(
      (placa) =>
        placa.placa.charAt(placa.placa.length - 1) == 9 ||
        placa.placa.charAt(placa.placa.length - 1) == 0
    );
  else if (dia === 5) return "Sabado não tem rodízio";
  else if (dia === 6) return "Domingo não tem rodízio";
  else return "dia invalido";
};

console.log(diaRodizio(6));
