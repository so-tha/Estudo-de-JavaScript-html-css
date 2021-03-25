/*Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.*/

let nota01 = 10
let nota02 = 10
let media = (nota01+nota02)/2

if(media >= 7){ 
    window.alert(`APROVADO`)
}else if(media < 7){
    window.alert(`REPROVADO`)
}else{
    (`APROVADO COM DISTINÇÃO`)
}