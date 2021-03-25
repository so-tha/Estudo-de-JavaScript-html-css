/*Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.*/

let nomedeusuario = 'haeki'
let senha = 'haeki' 

document.write(`Usuario: ${nomedeusuario}`)
document.write(`Senha: ${senha}`)

if(senha == nomedeusuario){
    window.alert(`ERRO! A sua senha não pode ser igual ao usuario`)
}else{
    window.alert(`Cadrasto feito com sucesso!!`)
}
