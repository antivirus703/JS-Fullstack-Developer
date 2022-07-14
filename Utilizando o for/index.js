let spaceShip = prompt("Digite o nome da nave");

let charReplace = prompt("Qual caractere deseja substituir?");

let charNewReplace = prompt("Por qual caractere deseja substituir?");

let newSpaceShip = ""

for(let i = 0; i <spaceShip.length; i++) {
  if(spaceShip[i] == charReplace){
    newSpaceShip += charNewReplace;
  } else {
    newSpaceShip += spaceShip[i];
  }
}

alert("O nome nome da nave é: " + newSpaceShip);