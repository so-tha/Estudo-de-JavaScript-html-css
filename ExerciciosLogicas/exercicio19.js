//19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
//média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
//não um bom aproveitamento (se ficou acima da média 7.0).

let aluno = 'George'
let nota01 = 3.5
let nota02 = 7
let media = (nota01 + nota02)/2

if (media >= 8) {

   console.log(`O aluno ${aluno} teve um bom aproveitamento, pois sua media doi de ${media}`)

} else {

    console.log(`O aluno ${aluno} não teve um bom aproveitamento, pois sua media foi de ${media}`)

} 