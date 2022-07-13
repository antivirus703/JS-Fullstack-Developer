alert("Bem vindo! Vamos calcular a diferença de idades entre vocês.")
let nameOld = prompt ("Qual seu nome?")
let ageOld = prompt ("Qual sua idade?")
let ageOldCnf = confirm ("Sua idade é: "+ ageOld +" anos?")

let nameNew = prompt ("Qual seu nome?")
let ageNew = prompt ("Qual sua idade?")
let ageNewCnf = confirm ("Sua idade é " + ageNew +" anos?")

alert("Nome: " + nameOld)
alert("Idade: " + ageOld)
alert("Idade confirmada: " + ageOldCnf)

alert("Nome: " + nameNew)
alert("Idade: " + ageNew)
alert("Idade confirmada: " + ageNewCnf)

let ageDif = ageOld - ageNew
alert("Pessoa mais velha: " + nameOld + "\nIdade: " + ageOld +
"\nPessoa mais nova: " + nameNew + "\nIdade: " + ageNew +
"\n\nA diferença de idade entre vocês é de: " + ageDif + " anos.")