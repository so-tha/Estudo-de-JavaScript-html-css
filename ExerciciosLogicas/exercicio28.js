/*28) Faça um programa que leia a largura e o comprimento de um terreno
retangular, calculando e mostrando a sua área em m². O programa também
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
 - Abaixo de 100m² = TERRENO POPULAR
 - Entre 100m² e 500m² = TERRENO MASTER
 - Acima de 500m² = TERRENO VIP*/

 let largura = 20
 let comprimento = 10
 let area = comprimento * largura

 if ( area < 100) {
     console.log(`TERRENO POPULAR`)

 } else if (area <= 500){
         console.log(`TERRENO MASTER`)
     } else {
         console.log(`TERRENO VIP`) 
          
     
 }