 /*Crie um programa que leia vários números pelo teclado e mostre no final o 
somatório entre eles.
Obs: O programa será interrompido quando o número 1111 for digitado*/

let numeros = 1
let soma = 0

do{
    console.log(numeros)
    numeros ++
    soma += numeros
}while(numeros <= 1111)
   console.log(`A soma dos numeros são ${soma}`) 



