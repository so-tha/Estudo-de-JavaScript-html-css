/* 47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 + 
450 + 400 + 350 + 300 + ... + 50 + 0 */

let c = 0
let soma = 0

while(c <= 500){
    console.log(`${c} + ${soma}`)
    soma += c 
    console.log(`[${soma}] `)
    c += 50
}console.log(`Acabou`)