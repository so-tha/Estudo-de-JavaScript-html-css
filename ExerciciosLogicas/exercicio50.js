/*50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e 
mostre na tela:
a) Quais foram os números sorteados
b) Quantos números estão acima de 5
c) Quantos números são divisíveis por 3*/


 //sem 1 ele não pega o numero que está sendo multiplicado
let acimadecinco = 0
let divisiveltres = 0

for(let c = 1;c <= 20; c++){
    let sorteado = Math.floor(Math.random() * 10) + 1
    console.log(`[Numero sorteado: ${sorteado}]`)
    if(sorteado > 5){
        acimadecinco++
    }
    if(sorteado%3==0){
        divisiveltres++
    }

} console.log(`Os numeros que estão acima de cinco são: ${acimadecinco} `)
  console.log(`Os numeros que são divisiveis por 3 são: ${divisiveltres}`)

