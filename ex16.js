/*Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7*/

let h = 1.61
let sexo = 'm'

if(sexo == 'h'){
    let p = (72.7*h) - 58
    window.alert(`O peso ideal para este homem seria de ${p}`)
}else{
    let p = (62.1*h) - 44.7 
    window.alert(`O peso ideal para esta mulher seria de ${p}`)
}