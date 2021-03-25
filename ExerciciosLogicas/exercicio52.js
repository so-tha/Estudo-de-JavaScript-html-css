/*52) Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
a) Qual é a média de idade do grupo
b) Quantas pessoas tem mais de 18 anos
c) Quantas pessoas tem menos de 5 anos
d) Qual foi a maior idade lida*/

let idade = 15

while(idade <= 25){

    if(idade >= 18){
        console.log(`Sua idade é ${idade}, você tem mais de 18`)
    }else if(idade <=5){
        console.log(`Voce tem menos de 5 anos`)
    }else{
        console.log(idade)
    }
    

    idade++

}console.log(`A maior idade lida é ${idade}`)
