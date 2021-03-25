/*35) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
tabela a seguir:
 - Carros populares (aluguel de R$90 por dia)
 - Até 100Km percorridos: R$0,20 por Km
 - Acima de 100Km percorridos: R$0,10 por Km
 - Carros de luxo (aluguel de R$150 por dia)
 - Até 200Km percorridos: R$0,30 por Km
 - Acima de 200Km percorridos: R$0,25 por Km*/

 let carro = 'luxo'
 let alugueldiario = 6
 let kmpercorridos = 300

 if(carro = 'luxo' && kmpercorridos < 100){
     let aluguel = alugueldiario * 150
     let km = kmpercorridos * 0.20
     console.log(`O valor por km percorrido é de ${km} e o do aluguel diario é ${aluguel}`)
 }else if(carro = 'luxo' && kmpercorridos > 100){
     let aluguel = alugueldiario * 150
     let km = kmpercorridos * 0.10
     console.log(`O valor por km percorrido é de ${km} e o do aluguel diario é ${aluguel}`) 
 }else if (carro = 'popular' && kmpercorridos < 100){
     let aluguel = alugueldiario * 90
     let km = kmpercorridos * 0.20
     console.log(`O valor por km percorrido é de ${km} e o do aluguel diario é ${aluguel}`)  
 }else{
     let aluguel = alugueldiario * 90
     let km = kmpercorridos * 0.10
     console.log(`O valor por km percorrido é de ${km} e o do aluguel diario é ${aluguel}`) 
 }