/*22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
 - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
 - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.*/

let nascimento = 2004
let anoatual = 2021
let idade = anoatual - nascimento
let anos = idade - 18


if (idade >= 18) {
    console.log(`Voce possui ${idade}, já se passaram ${anos} anos desde que você se alistou `)
} else {
    console.log(`Você possui ${idade}, ainda faltam ${anos} para você se alistar`)
}