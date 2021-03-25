/*Escreva um programa que leia 15 números e guarde-os em um vetor. No final, 
mostre o vetor inteiro na tela e em seguida mostre em que posições foram 
digitados valores que são múltiplos de 10.*/

let numeros = []

for(let i = 0; i <= 15;i++){
    
    if(i%10==0){
        console.log(`[${i}] é divisivel por 10`)
    }else{
        console.log(i)
    }
numeros.push(i)
}
