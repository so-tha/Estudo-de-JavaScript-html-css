/* 36) Um programa de vida saudável quer dar pontos por atividades físicas que podem
ser trocados por dinheiro. O sistema funciona assim:
 - Cada hora de atividade física no mês vale pontos
 - até 10h de atividade no mês: ganha 2 pontos por hora
 - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
 - acima de 20h de atividade no mês: ganha 10 pontos por hora
 - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
 Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
 calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar*/

 let horasmensal = 15
 
 if (horasmensal <= 10){
     let totalpontos = horasmensal * 2
     let ganhototal = totalpontos * 0.05
     console.log(`Voce fez ${totalpontos} pontos, seu ganho foi de ${ganhototal}`)
    }else if( horasmensal <= 20 ){
     let totalpontos = horasmensal * 5
     let ganhototal = totalpontos * 0.05
    console.log(`Voce fez ${totalpontos} pontos, seu ganho foi de ${ganhototal}`)    
    }else{
        let totalpontos = horasmensal * 10
        let ganhototal = totalpontos * 0.05
       console.log(`Voce fez ${totalpontos} pontos, seu ganho foi de ${ganhototal}`)   
    }

