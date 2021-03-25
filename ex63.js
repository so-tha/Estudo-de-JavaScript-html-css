/*82) Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em 
um vetor. No final, mostre: 
a) Qual é a média da turma
b) Quantos alunos estão acima da média da turma
c) Qual foi a maior nota digitada
d) Em que posições a maior nota aparece*/

let notas = [4,2,6,1,8,9,10,3,4,4]

let notamax = 10

let media = (4 + 2 + 6 + 1 + 8 + 9 + 1 + 3 + 4 + 4)/10
console.log(`A media das notas é ${media}`)

for(let i = 0; i < 9; i++){

    console.log(notas)

   if (i > media){
    console.log(` ${notas[i]} - Acima da media`)
}else if(i >= notamax){
    console.log(`[${i}] - Maior nota`)
}

}



