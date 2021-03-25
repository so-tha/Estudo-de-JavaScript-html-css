/*Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo*/

let numero01 = 5
let numero02 = 10
let numero03 = 3.5

let produto = (numero01^2) * (numero02 / 2)
console.log(`O dobro do primeiro com metade do segundo é ${produto}`)

let soma = (numero01^3 + numero03)
console.log(`A soma do triplo do primeiro com o terceiro é de ${soma}`)

let terceiro = (numero03^3)
console.log(`O terceiro elevadoo ao cubo é ${terceiro}`)