/*Crie um programa que mostre na tela a seguinte contagem, usando a estrutura 
“faça enquanto”
0 3 6 9 12 15 18 21 24 27 30 Acabou!*/
let numeros = 0

do {
    console.log(numeros)
    numeros += 3

}while (numeros <= 30)
console.log(`Acabou`)