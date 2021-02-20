//20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
//ÍMPAR.

let numero = 14
let parouimpar = numero % 2 //Usar o mudulo no lugar da divisão pois a sobra é q vai determinar se é par ou impar


if (parouimpar % 2 ===0) {

    console.log(`O numero ${numero} é PAR!`)

} else {

    console.log(`O numero ${numero} é IMPAR`)

}
