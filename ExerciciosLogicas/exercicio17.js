//Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
//80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
//o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

var velocidade = 70
var multa = velocidade > 80
var valordamulta = (velocidade - 80) * 5


if (multa = 80) {
        console.log(`Você está dentro do limite de velocidade. Boa viagem!`);

} else {

        console.log(`Voce está acima da velociade, sua multa é no valor de ${valordamulta}`)
    }
