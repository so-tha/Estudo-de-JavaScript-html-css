/*Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
  Média de Aproveitamento  Conceito
  Entre 9.0 e 10.0        A
  Entre 7.5 e 9.0         B
  Entre 6.0 e 7.5         C
  Entre 4.0 e 6.0         D
  Entre 4.0 e zero        E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.*/

let nota1 = 9
let nota2 = 4
let media = (nota1 + nota2)/2

if(media >= 9 && media <= 10){
    window.alert(`A primeira nota do aluno foi ${nota1}, e a segunda ${nota2} e sua media foi ${media}. Aprovado!`)
}else if (media >= 7.5){
    window.alert(`A primeira nota do aluno foi ${nota1}, e a segunda ${nota2} e sua media foi ${media}. Aprovado!`)
}else if(media >= 6.0){
    window.alert(`A primeira nota do aluno foi ${nota1}, e a segunda ${nota2} e sua media foi ${media}. Aprovado!`)
}else if(media >= 4){
    window.alert(`A primeira nota do aluno foi ${nota1}, e a segunda ${nota2} e sua media foi ${media}. Reprovado!`)
}else if(media <4){
    window.alert(`A primeira nota do aluno foi ${nota1}, e a segunda ${nota2} e sua media foi ${media}. Reprovado!`)
}