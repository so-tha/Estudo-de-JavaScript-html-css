/*81) Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No 
final, mostre:a) Qual é a média de idade das pessoas cadastradas
b) Em quais posições temos pessoas com mais de 25 anos
c) Qual foi a maior idade digitada (podem haver repetições)
d) Em que posições digitamos a maior idade*/

let idade = [10,3,4,3,20,17,20,25]

let max = 44

for(let i = 0; i < 8;i++){
    console.log(idade[i])
    if(idade >= 25 ){
        console.log(`[${i}]`)
    }else if(i == max){
        console.log(`[${max}]`)
    }

}
 let media = (10 + 3 + 4 + 3 + 20 + 17 + 37 + 44)/8
    console.log(`A media de idade das pessoas cadastradas é de ${media.toFixed(0)} anos`)




