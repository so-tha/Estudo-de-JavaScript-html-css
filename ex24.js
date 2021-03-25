/*As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento*/


let salarioatual = 550

if(salarioatual <= 280){
    let aumento = (salarioatual)*(20/100)
    let novosalario = salarioatual + aumento
    window.alert(`O antigo salario era de ${salarioatual}, com o aumento de ${aumento} ele passou a valer ${novosalario}`)
}else if( salarioatual <= 700 ){
    let aumento = (salarioatual)*(15/100)
    let novosalario = salarioatual + aumento
    window.alert(`O antigo salario era de ${salarioatual}, com o aumento de ${aumento} ele passou a valer ${novosalario}`)
}else if(salarioatual <= 1500){
    let aumento = (salarioatual)*(10/100)
    let novosalario = salarioatual + aumento
    window.alert(`O antigo salario era de ${salarioatual}, com o aumento de ${aumento} ele passou a valer ${novosalario}`)
}else{
    let aumento = (salarioatual)*(10/100)
    let novosalario = salarioatual + aumento
    window.alert(`O antigo salario era de ${salarioatual}, com o aumento de ${aumento} ele passou a valer ${novosalario}`)
}