/*27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
mostrando uma mensagem no final, de acordo com a média atingida:
 - Média até 4.9: REPROVADO
 - Média entre 5.0 e 6.9: RECUPERAÇÃO
 - Média 7.0 ou superior: APROVADO*/

 var nota1 = 4
 var nota2 = 3.7
 var media = nota1 + nota2 / 2

 if (media < 4.9){
     console.log(`REPROVADO`)
 } else {
     if (media < 5.0 && media < 6.9){
         console.log(`RECUPERAÇÃO`)
     }else{
         console.log(`APROVADO`)
     }
 }