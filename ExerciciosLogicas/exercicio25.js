/*25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.
 A+B > C 
 B+C > A
 A+C > B */

let segmentoA = 16
let segmentoB = 20
let segmentoC = 30

if (segmentoA + segmentoB > segmentoC && segmentoB + segmentoC > segmentoA && segmentoA + segmentoC > segmentoB) {
    console.log(`Com os esses segmentos é possivel formar um triângulo`)
} else {
    console.log(`Não é possivel formar um triângulo`)
}