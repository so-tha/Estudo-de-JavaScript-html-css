/*Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.*/

let paisA_h = 80000
let paisB_h = 200000
let anospassados = 0

while(paisA_h < paisB_h){

  let crescimento_a = (paisA_h)*(3/100)
  let crescimento_b = (paisB_h)*(1.5/100)
  
  paisA_h = crescimento_a + paisA_h 
  paisB_h = crescimento_b + paisB_h


  anospassados++
}console.log(anospassados)
