//Altere o programa para mostrar no final a soma dos números.

//Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

let numero1 = 2
let numero2 = 8
let soma = 0

while(numero1 < numero2){
    numero1++
    
    if(numero1!=numero2){
        console.log(numero1)
    }
    soma += numero1 
}        console.log(`[${soma}]`)
