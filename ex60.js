/*79) Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. 
No final, mostre quais são os números pares que foram digitados e em que 
posições eles estão armazenados.*/

let inteiros = []

for(let i = 0; i <= 9; i++){
    if(i%2==0){
        
        console.log(`${i} - Par`)
    } else{
        console.log(i)
    }
    inteiros.push(i)
   inteiros.indexOf(i%2==0); 
}