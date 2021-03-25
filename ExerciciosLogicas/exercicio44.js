/*44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
incremento, mostrando em seguida todos os valores no intervalo:
Ex: Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!*/
let ultvalor = 10
let valorini =  3
let incr = 2
let c = 3

    console.log(`Digite o primeiro valor: ${valorini}`)
    console.log(`Digite o ultimo valor: ${ultvalor}`)
    console.log(`Digite o incremento ${incr}`)

while(c <= 9){
    
    console.log(c)
    
    c += 2
} 
console.log('Acabou')

