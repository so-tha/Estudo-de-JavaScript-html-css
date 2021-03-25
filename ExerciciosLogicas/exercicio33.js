/*33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra
de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
ela não pode exceder 30% do salário ou então o empréstimo será negado.*/

let valor = 80000
let salario = 2000
let anospagando = 50
let valoranual = valor / anospagando
let valormensal = valoranual / 12
let trintaporcento = (salario*30)/100

if (valormensal < trintaporcento){
    console.log(`Parabens seu emprestimo foi aceito`)
} else {
    console.log(`Seu emprestimo foi negado`)
}




