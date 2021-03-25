/*Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e 
15 sorteados pelo computador. Depois disso, peça para o usuário digitar um 
número (chave) e seu programa deve mostrar em que posições essa chave foi 
encontrada. Mostre também quantas vezes a chave foi sorteada.*/

let chave = [2]
let numero = 15

for(let i = 1; i <= 30; i++){
    let sorteados = Math.floor(Math.random()*15)
     
    if(sorteados == chave){
        console.log(`Achou a chave`)
    }else{
        console.log(sorteados)
    }
    

}
