/*Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/

let turno = 'm'

if(turno == 'm'){
    window.alert(`Bom dia!!`)
}else if(turno == 'v'){
    window.alert(`Boa tarde!`)
}else if(turno == 'n'){
    window.alert(`Boa Noite!`)
}else{
    window.alert(`Valor Invalido!!`)
}
