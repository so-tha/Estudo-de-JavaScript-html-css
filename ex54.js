/*Crie um programa que preencha automaticamente (usando lógica, não apenas 
    atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
    5 3 5 3 5 3 5 3 5 3*/

    let sequencia = []
    

    for(let i = 0; i <= 10;i++){
        if(sequencia.length%2==0){
            sequencia.push(5)
        }else{
            sequencia.push(3)
        }
    }
    console.log(sequencia)

    
