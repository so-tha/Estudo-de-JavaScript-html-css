/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';*/

let nome = 'john'
let idade = 45
let salario = 2000
let sexo = 'm'
let estadocivil = 'v'

if(String(nome).length > 3){
    console.log(`Nome: ${nome}`)
}else{
    console.log(`ERRO! Digite um nome maior`)
}

 if(idade < 150 && idade > 0){
    console.log(`Idade: ${idade}`)
}else{
    console.log(`ERRO! Idade indisponivel`)
}
 if(salario < 0){
    console.log(`Salario: ${salario}`)
}else if(sexo == 'm' || sexo == 'f'){
    console.log(`Sexo: ${sexo}`)
}else{
    console.log(`Invalido!`)
}
 if(estadocivil == 's' || estadocivil == 'c' || estadocivil == 'v' || estadocivil == 'd'){
    console.log(`Estado Civil: ${estadocivil}`)
}
