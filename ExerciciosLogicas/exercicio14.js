/*A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.*/

var kmpercorridos = 120
var diastotal = 2

let valordiario = 90 * diastotal
let valorporkm = kmpercorridos * 0.20
let valortotal = valorporkm + valordiario


console.log (` O valor da diaria do carro é de ${valordiario}, e o valor por km percorrido foi de ${valorporkm}, dando o total de ${valortotal}`)
