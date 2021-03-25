/*46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 + 
8 + 10 + 12 + 14 + ... + 98 + 100.*/

let c = 6
let soma = 0

while(c <= 100){
    console.log(`${c} + ${soma}`)
    soma += c 
    console.log(`[${soma}] `)
    c += 2
    
}console.log(`Acabou`)