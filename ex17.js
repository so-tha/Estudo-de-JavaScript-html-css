/*15.João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.*/

//let peso = //peso dos peixes
//let limite = 50 // limite do peso 
//let multa = 4 // multa por excedente
//let excedente // excesso a quantidade de quilos 

let peso = 70
let excesso = peso - 50
let multa = excesso * 4

window.alert(`O peso do peixe registrado é de ${peso}, o excedente foi de ${excesso} sendo assim a multa de ${multa}`)