let spaceShipName = prompt("Digite o nome da nave");
let spaceShipVelocity = 0;
let chosenOption

function showMenu() {
  let option
  while (option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt("O que deseja fazer?\n" +
      "1 - Acelerar a nave em 5km/s\n" +
      "2 - Desacelerar a nave em 5km/s\n" +
      "3 - Imprimir dados de bordo\n" +
      "4 - Sair do programa")
  }
  return option
}

function speedUp(velocity) {
  let newVelocity = velocity + 5
  return newVelocity
}

function slowDown(velocity) {
  let newVelocity = velocity - 5
  if (velocity < 0) {
    newVelocity
  } else if (velocity <= 0) {
    alert(`Velocidade: ${velocity} km/s \nNecessário acelerar espaçonave!`)
    return newVelocity = 0;
  }
  return newVelocity
}

function printSpaceShipData(name, velocity) {
  alert(`Espaçonave: ${name} \nVelocidade: ${velocity} km/s`)
}

do {
  chosenOption = showMenu()
  switch (chosenOption) {
    case "1":
      spaceShipVelocity = speedUp(spaceShipVelocity)
      break
    case "2":
      spaceShipVelocity = slowDown(spaceShipVelocity)
      break
    case "3":
      printSpaceShipData(spaceShipName, spaceShipVelocity)
      break
    default:
      alert("Encerrando programa de bordo")
  }
} while (chosenOption != "4")