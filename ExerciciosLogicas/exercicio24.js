/*24) Faça um algoritmo que pergunte a distancia que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
viagens até 200Km e R$0.45 para viagens mais longas*/

let distancia = 100

if ( distancia <= 200){

    let passagem = distancia * 0.50
    console.log(`Sua passagem custa ${passagem}, pois sua viagem é curta. Boa Viagem!`)

} else {
    let passagem = distancia * 0.45
        console.log(`Sua passagem custa ${passagem}, pois sua viagem é longa. Boa viagem!`)
}