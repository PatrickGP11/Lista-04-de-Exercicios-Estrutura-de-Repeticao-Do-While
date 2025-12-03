alert("Tabuada")
let numero = parseInt(prompt("Digite um número para saber o valor de sua tabuada :"))
let contadora = 1

do {
    console.log(numero + "X" + contadora + "=" + numero * contadora)
    contadora++
} while (contadora < 11)