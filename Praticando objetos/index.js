let spaceship = {
  velocity: 0,
  speedUp: function(acceleration) {
    this.velocity += acceleration
  },
  speedDown: function(deacceleretion) {
    this.velocity -= deacceleretion
  }
}

function registerSpaceship() {
spaceship.name = prompt("Digite o nome da nave: ")
spaceship.type = prompt("Digite o tipo da nave: ")
spaceship.maxVelocity = Number(prompt("Qual é a velocidade máxima da nave (km/s)?"))
}

function acelerate() {
  let acceleration = Number(prompt("Quanto você deseja acelerar? (km/s)"))
  spaceship.speedUp(acceleration)
  if(spaceship.velocity > spaceship.maxVelocity){
    alert(`Velocidade máxima alcançada!\nVelocidade da nave: ${spaceship.velocity} km/s +
    \nVelocidade máxima permitida: ${spaceship.maxVelocity} km/s`)
  }
}

function deaccelerete() {
  let deacceleretion = Number(prompt("Quanto deseja diminuir? (km/s)"))
  spaceship.speedDown(deacceleretion)
  alert(`Velocidade atual após redução: ${spaceship.velocity}`)
}

function stop() {
  alert(`Nome: ${spaceship.name}\nTipo: ${spaceship.type}\nVelocidade da nave: ${spaceship.velocity}\nVelocidade máxima permitida: ${spaceship.maxVelocity}`)
  spaceship.velocity = 0
}

function showMenu() {
  let chosenOption
  do{
    chosenOption = prompt("Digite a opção desejada: \n1 - Acelerar\n2 - Parar\n3 - Diminuir")
    switch(chosenOption){
      case "1":
        acelerate()
        break
      case "2":
        stop()
        break
      case "3":
        deaccelerete()
        break
        default:
          alert("Opção inválida!")
    }
  } while(chosenOption != "2")
}

registerSpaceship()
showMenu()