/* 45) O programa acima vai ter um problema quando digitarmos o primeiro valor 
maior que o último. Resolva esse problema com um código que funcione em qualquer 
situação.*/

let ultvalor = 9
let valorini =  10
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