/*49) Crie um programa que leia 6 números inteiros e no final mostre quantos deles 
são pares e quantos são ímpares.*/

let c = 1
let soma = 0

while(c <= 6){
    console.log(c)
   if(c%2==0){
        console.log(`O numero [${c}] é par`)
    }else{
        console.log(`O numero [${c}] é impar`)
    }
    c++
} 