//Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.

let i = 1
let somap = 0
let somai = 0

while(i <= 10){
  
  if(i%2==0){
    console.log(`${i} - Par`)
    somap = somap += i
  }else if(i%2!==0){
    console.log(`${i} - Impar`)
    somai = somai += i
  }
  
  i++
}console.log(`${somap} - Soma de todos os numeros pares`)
console.log(`${somai} - Soma de todos os numeros impares`)
