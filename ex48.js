/*Escreva um programa que leia um número qualquer e mostre a tabuada desse 
número, usando a estrutura “para”.
Ex: Digite um valor: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15 ...*/

let numero = 5


for(let c = 1; c <= 10; c ++){
    let multiplicacao = numero * c
    console.log(`${numero} x ${c} = ${multiplicacao}`)
}