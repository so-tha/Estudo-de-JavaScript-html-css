/*26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
 - O primeiro valor é o maior
 - O segundo valor é o maior
 - Não existe valor maior, os dois são iguais*/


 var numero1 = 10
 var numero2 = 1

 if (numero1 > numero2){
     console.log(`O primeiro é maior`)
 } else {
     if(numero2 > numero1) {
        console.log(`O segundo é maior`)
     } else {
         console.log(`Não existe valor maior, os dois são iguais`)
     }
 }