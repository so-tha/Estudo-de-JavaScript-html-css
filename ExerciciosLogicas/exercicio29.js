/*29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
acordo com a tabela a seguir:
 - Até 3 anos de empresa: aumento de 3%
 - entre 3 e 10 anos: aumento de 12.5%
 - 10 anos ou mais: aumento de 20%*/

 let funcionario = 'George'
 let salario = 2000
 let anostrabalhados = 5

 if (anostrabalhados <= 3 ){
    let porcentagem = (3 / 100)*salario
    let novosalario = salario + porcentagem
    console.log(`O salario reajustado é de ${novosalario}`)

 } else if ( anostrabalhados <= 10){
         let porcentagem = (12.5 / 100)*salario
         let novosalario = salario + porcentagem
         console.log(`O salario reajustado é de ${novosalario}`)
     } else {
         let porcentagem = (20 / 100)*salario
         let novosalario = salario + porcentagem
         console.log(`O salario reajustado é de ${novosalario}`) 
     }

