/*15. Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
Dicas:
Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes; */

let lado1 = 3
let lado2 = 2
let lado3 = 4


if(lado1 == lado2 && lado2 == lado3){
    window.alert(`Este triangulo é equilatero`)
}else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    window.alert(`Este triangulo é isósceles`)
}else if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    window.alert(`Este triangulo é escaleno`)
}else{
    window.alert(`Não é possivel formar um triangulo`)
}
    
