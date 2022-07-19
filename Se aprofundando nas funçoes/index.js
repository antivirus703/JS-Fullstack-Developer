let spaceShipVelocity = 150;

function slowDown (velocity, printerVelocity) {
  while (velocity > 0) {
    velocity -= 20
    if(velocity < 0){
      velocity = 0
    }
    printerVelocity(velocity)
  }
  alert("Nave para e comportas abertas")
}

const printer = (velocity) => alert(`Velocidade atual: ${velocity}`)

slowDown(spaceShipVelocity, printer)


// segundo forma encontrada

/* const speedDown = (velocidade, callPrinter) => {
  while (velocidade > 0) {
    callPrinter(velocidade)
    velocidade -= 20
  }
  console.log(`A nave esta parada, abrindo portas!`);
  return velocidade
}

const printer = velocidade => console.log(`Velocidade da nave: ${velocidade}`);

speedDown(150, printer) */