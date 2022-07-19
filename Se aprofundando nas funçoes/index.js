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

/* const speedDown = (velocity, callPrinter) => {
  while (velocity > 0) {
    callPrinter(velocity)
    velocity -= 20
  }
  console.log(`A nave esta parada, abrindo portas!`);
  return velocity
}

const printer = velocity => console.log(`Velocidade da nave: ${velocity}`);

speedDown(150, printer) */