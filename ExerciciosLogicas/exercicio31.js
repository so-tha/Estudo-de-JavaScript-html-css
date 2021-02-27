/* 31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura) */
/* pedra e papel
 papel e tesoura 
 pedra e tesoura
 */
let jogador1 = 'papel'
let jogador2 = 'tesoura'

if(jogador1==jogador2) {
    console.log('Empate!')
}else{
    if(jogador1=='pedra'&& jogador2=='papel'){
        console.log(`O jogador 1 venceu!`)
    }else if(jogador2=='pedra' && jogador1=='papel'){
        console.log(`Jogador 2 venceu!`)
    }else if(jogador1=='papel' && jogador2=='tesoura'){
        console.log(`O jogador 2 venceu!`)
    }else if(jogador1=='tesoura' && jogador2=='papel'){
        console.log(`O jogador 1 venceu!`)
    }else if (jogador1=='pedra' && jogador2=='tesoura'){
        console.log(`O jogador 1 venceu!`)
    }else if(jogador1=='tesoura' && jogador2=='pedra'){
        console.log(`O jogador 2 venceu!`)
    }else {
        console.log(`Jogada invalida`)
    }
}