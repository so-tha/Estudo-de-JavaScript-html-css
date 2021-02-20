/*12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto*/

var preco = 380
var desconto = (preco * 5)/100
var precopromocional = preco - desconto

console.log(`O preço promocional do produto é ${precopromocional}`)