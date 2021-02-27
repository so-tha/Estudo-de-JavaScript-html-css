/* 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
de triângulo será formado:
 - EQUILÁTERO: todos os lados iguais
 - ISÓSCELES: dois lados iguais
 - ESCALENO: todos os lados diferentes */

let segmentoA = 10
let segmentoB = 20
let segmentoC = 20

if (segmentoA + segmentoB > segmentoC && segmentoB + segmentoC > segmentoA && segmentoA + segmentoC > segmentoB) {
    console.log(`Com esses segmentos é possivel formar um triângulo`)

    if (segmentoA == segmentoB && segmentoC == segmentoA) {
        console.log(`Esse triangulo é equilátero`)
    } else if (segmentoA == segmentoB && segmentoC != segmentoA) {
        console.log(`Este triangulo é Escaleno`)
    } else {
        console.log(`Este triangulo é Escaleno`)
    }

} else { console.log(`Não é possivel formar um triângulo`) }





