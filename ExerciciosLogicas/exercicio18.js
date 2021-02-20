/* 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.
*/
let anoatual = 2021
let anodenascimento = 2000
let idade = anoatual - anodenascimento

if (idade >= 18) {

    console.log(`Parabens você pode votar !`)

} else {

    console.log(`Voce não pode votar! `)
}