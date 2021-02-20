/*8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km /1000
1.8572Hm  /100
18.572Dam /10
1857.2dm *10
18572.0cm *100
185720.0mm *1000*/ 

let distanciametros = 185.72
let km = distanciametros / 1000
let hm = distanciametros / 100
let dam = distanciametros / 10
let dm = distanciametros * 10
let cm = distanciametros * 100
let mm = distanciametros * 1000

console.log (`km ${km} \nhm ${hm} \n dam ${dam} \n dm ${dm} \n cm ${cm} \n mm ${mm}`)