/*Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.*/

let nota = 15
let c = 0
//apenas entre 0 e 10

while(c <= nota){
    
    if (nota > 10 && nota < 0) {
        console.log(`invalido`)
    
    }else{
        console.log(c)
    }
    c++
}