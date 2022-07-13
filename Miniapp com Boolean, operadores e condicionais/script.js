let birthDateEntry = prompt ("Digite a data de nascimento (formato DD/MM/YYYY)")

let birthDate = moment(birthDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - birthDate

let chosenOption = prompt ("Escolha como gostaria de exibir a sua idade: \n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias\n5 - Anos")

if(chosenOption == "1"){
  let secondsOfbirth = Math.round(dateDiff / 1000)
  alert("Idade em segundos: " + secondsOfbirth)
} else if(chosenOption == "2"){
  let minutesOfbirth = Math.round(dateDiff / 1000 / 60)
  alert("Idade em minutos: " + minutesOfbirth)
} else if(chosenOption == "3"){
  let hoursOfbirth = Math.round(dateDiff / 1000 / 3600)
  alert("Idade em horas: " + hoursOfbirth)
} else if(chosenOption == "4"){
  let daysOfbirth = Math.round(dateDiff / 1000 / 3600 / 24)
  alert("Idade em dias: " + daysOfbirth)
} else if(chosenOption == "5"){
  let yearsOfbirth = Math.round(dateDiff / 1000 / 3600 / 24 / 365)
  alert("Idade em anos: " + yearsOfbirth)
} else {
  alert("Opção inválida")
}