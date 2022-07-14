let peopleName = prompt("Digite um nome que deseja inverter e parar a exibição em uma determinada letra");
let charNameRemove = prompt("Em qual caractere deseja parar a inversão?")

let invertedName = ""

for (let i = peopleName.length - 1; i >= 0; i--) {
  if (peopleName[i] == charNameRemove) {
    break
  }
  invertedName += peopleName[i];
}
alert(`O nome é: ${peopleName} \nO nome invertido após ocultação do caractere digitado é: ${invertedName}`);