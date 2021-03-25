/*Crie um programa que preencha automaticamente (usando lógica, não apenas 
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros 
    elementos da sequência de Fibonacci:
    1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987*/

    let anterior = 1
    let atual = 1
    let soma = 0
    let sequencia = [1]

    for(let i = 0; i < 15;i++){
        if(soma == 0){
            soma = 1
        }else{
            soma = atual + anterior
        
        } 
        anterior = atual
        atual = soma
        sequencia.push(soma)
    }
    console.log(sequencia)