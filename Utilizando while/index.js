let warpCount = 0;
let chosenOption = "";

let spaceShip = prompt("Digite o nome da nave");

chosenOption = prompt("Deseja entrar em dobra espacial? \n1 - Sim\n2 - Não");

if (chosenOption == "1") {
  while (chosenOption == "1") {
    chosenOption = prompt(
      "Deseja realizar a próxima dobra? \n1 - Sim\n2 - Não"
    );
    warpCount += 1;
  }
  alert("Nave: " + spaceShip + "\nQuantidade de dobras: " + warpCount);
} else {
  alert(
    "Nave não entrou em dobra.\nNave: " +
    spaceShip +
    "\nNumero de dobras: " +
    warpCount
  );
}
