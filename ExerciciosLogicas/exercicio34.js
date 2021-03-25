/*34) O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
indivíduo dentro de certas faixas.
 - abaixo de 18.5: Abaixo do peso
 - entre 18.5 e 25: Peso ideal
 - entre 25 e 30: Sobrepeso
 - entre 30 e 40: Obesidade
 - acima de 40: Obseidade mórbida
Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado
da altura)*/

let altura = 1.61
let peso = 59
let imc = peso/(altura*altura)

if(imc <= 18.5){
    console.log(`Seu imc é de ${imc}, você esta abaixo do peso!`)
}else if( imc <= 25){
    console.log(`Seu imc é de ${imc}, você está no seu peso ideial!`)
}else if( imc <= 30){
    console.log(`Seu imc é de ${imc}, você está com sobrepeso`)
}else if( imc < 40){
    console.log(`Seu imc é de ${imc}, você está com obesidade`)
}else{
    console.log(`Seu imc é de ${imc}, você está com obsedidade mórbida`)
}

