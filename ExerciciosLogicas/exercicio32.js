/*32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
jogador vai tentar descobrir qual foi o valor sorteado.*/

let valor = 5
let sorteado = Math.floor(Math.random() * 5) + 1 //match random vai sortear um numero entre 0 e 1
//math.floor para arredondar

if(valor == sorteado){
    console.log(`Os valores são iguais, você venceu!`)
}else{
    console.log(`O valor certo é ${sorteado},você perdeu!`)
}
//else não tem verificação