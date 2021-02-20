/*23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. Faça um programa que leia nome,
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
que:
 - Homens ganham 5% de desconto
 - Mulheres ganham 13% de desconto*/

 var nome = 'John'
 var sexo = 'masculino' 
 var valorcompras = 200
 
 if (sexo=='feminino') {
     let desconto = (valorcompras * 13)/100
     let precototalf = valorcompras - desconto
    console.log(`${nome}, o valor total de sua compra é de ${precototalf}`)
 } else if (sexo=='masculino') {
    let desconto = (valorcompras * 5)/100
    let precototal = valorcompras - desconto
    console.log(`${nome}, o valor total da sua compra é de ${precototal}`)
 }

