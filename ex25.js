/*Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IR:
Salário Bruto até 900 (inclusive) - isento
Salário Bruto até 1500 (inclusive) - desconto de 5%
Salário Bruto até 2500 (inclusive) - desconto de 10%
Salário Bruto acima de 2500 - desconto de 20%
 Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
 Salário Bruto: (5 * 220)        : R$ 1100,00
        (-) IR (5%)                     : R$   55,00  
        (-) INSS ( 10%)                 : R$  110,00
        FGTS (11%)                      : R$  121,00
        Total de descontos              : R$  165,00
        Salário Liquido                  */

 let valor_hora = 10
 let horastrabalhadas = 200
 let salario = valor_hora * horastrabalhadas

 if(salario <= 900){
     let descontosind = (salario/100)*3
     let novosalario = salario - descontosind
     window.alert(`Voce esta isento do desconto de IR!Seu salario é ${novosalario}`)

 }else if(salario <=1500){
     let ir = (salario/100)*5
     let descontosind = (salario/100)*3
     let novosalario = salario - descontosind - ir
     window.alert(`-IR = ${ir} -Sindicato = ${descontosind} -Novo Salario = ${novosalario}`)

 }else if(salario <= 2500){
    let ir = (salario/100)*10
    let descontosind = salario * (3/100)
    let novosalario = salario - descontosind - ir
    window.alert(`-IR = ${ir} -Sindicato = ${descontosind} -Novo Salario = ${novosalario}`)
    
 }else{
    let ir = (salario/100)*20
    let descontosind = salario * (3/100)
    let novosalario = salario - descontosind - ir
    window.alert(`-IR = ${ir} -Sindicato = ${descontosind} -Novo Salario = ${novosalario}`)
    
 }



