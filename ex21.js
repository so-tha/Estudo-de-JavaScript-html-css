/*Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.*/

let produto1 = 18
let produto2 = 40
let produto3 = 16

if(produto1 < produto2 && produto1 < produto3){
   window.alert(`O produto de menor valor é ${produto1}`)
}else if(produto2 < produto1 && produto2 < produto3){
    window.alert(`O produto de menor valor é ${produto2}`)
}else{
    window.alert(`O produto de menor valor é ${produto3
    }`)
}