let distanceLY = prompt("Digite a distância em anos-luz");
let chosenOption = prompt(
  "Para qual unidade deseja converter? \n1. Parsec(Pc) \n2. Unidade Astronômica(Au) \n3. Quilômetros(Km)\n\n(Digite o numero da opção desejada)"
);

let chosenUnity
let convertedDistance

switch (chosenOption) {
  case "1":
    chosenUnity = "Parsec"
    convertedDistance = distanceLY * 0.306601
    break
  case "2":
    chosenUnity = "Unidade astronômica"
    convertedDistance = distanceLY * 63241.1
    break
  case "3":
    chosenUnity = "Quilômetros"
    convertedDistance = distanceLY * 9.5 * Math.pow(10, 12)
    break
  default:
    chosenUnity = "Unidade não identificada"
    convertedDistance = "Conversão fora do escopo"
}

alert("Distância em anos-luz: " + distanceLY + "\n" + chosenUnity + ": " + convertedDistance)