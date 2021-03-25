/*Faça um programa usando a estrutura “faça enquanto” que leia a idade de 
várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou 
não continuar a digitar dados. No final, quando o usuário decidir parar, mostre 
na tela:
a) Quantas idades foram digitadas
b) Qual é a média entre as idades digitadas
c) Quantas pessoas tem 21 anos ou mais.*/

let idade = 0


do{
    idade ++

  if(idade >= 21){
    console.log(` [${idade}] - Maiores de 21`)
} else {
    console.log(idade)
    
}
}while (idade <= 50)
//let media = idade / 51
    //console.log(media)