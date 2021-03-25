/*37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um
aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
No final, mostre o seu novo salário, baseado na tabela a seguir:
- Mulheres
 - menos de 15 anos de empresa: +5%
 - de 15 até 20 anos de empresa: +12%
 - mais de 20 anos de empresa: +23%
- Homens
 - menos de 20 anos de empresa: +3%
 - de 20 até 30 anos de empresa: +13%
 - mais de 30 anos de empresa: +25% */

 let salarioatual = 1500
 let genero = 'mulher'
 let anosdeservico = 20

if (genero = 'mulher' && anosdeservico < 15){
    let porcentagem = (5/100)*salarioatual
    let novosalario = salarioatual + porcentagem
    console.log(`O seu novo salario é de ${novosalario}`)
}else if(genero = 'mulher' && anosdeservico == 15 && anosdeservico < 20){
    let porcentagem = (12/100)*salarioatual
    let novosalario = salarioatual + porcentagem
    console.log(`O seu novo salario é de ${novosalario}`) 
}else if(genero = 'mulher' && anosdeservico > 30){
    let porcentagem = (23/100)*salarioatual
    let novosalario = salarioatual + porcentagem
    console.log(`O seu novo salario é de ${novosalario}`)
}else if(genero = 'homem' && anosdeservico < 20){
    let porcentagem = (3/100)*salarioatual
    let novosalario = salarioatual + porcentagem
    console.log(`O seu novo salario é de ${novosalario}`)
}else if(genero = 'homem' && anosdeservico == 20 && anosdeservico < 30){
    let porcentagem = (13/100)*salarioatual
    let novosalario = salarioatual + porcentagem
    console.log(`O seu novo salario é de ${novosalario}`)
}else{
    let porcentagem = (25/100)*salarioatual
    let novosalario = salarioatual + porcentagem
    console.log(`O seu novo salario é de ${novosalario}`)
}
