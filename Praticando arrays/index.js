let hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];
let with9trip = hitchedSpaceships
  .filter(element => {
    return element[1] > 9;
  })
  .map(element => {
    return element[0];
  });
let ongoingProcess = hitchedSpaceships.findIndex(element => {
  return element[2] == false;
});

let upcasedSpaceships = hitchedSpaceships.map(currentSpaceship => {
  return currentSpaceship[0].toUpperCase();
});
alert(
  `Naves com mais de 9 tripulantes: ${with9trip.join(", ")}\nPlataforma com processo de engate: ${ongoingProcess + 1}\nTotal de espaçonaves: ${upcasedSpaceships.join(", ")}`
);
