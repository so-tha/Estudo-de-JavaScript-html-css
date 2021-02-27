function verificar() {
     var data = new Date() //adiciona a data atual
     var ano = data.getFullYear() //leva em conta o ano atual
     var fano = document.getElementById('txtano')
     var res = document.getElementById('res')
     if (fano.value.length == 0 || Number(fano.value) > ano){ //se o ano for maior que o atual
         window.alert('[ERRO] Verifique os dados e tente novamente! ')
     }else{
        var fsex = document.getElementsByName('radsex') //radsex deve ser igual para que nao ocorra erro na hora de escolher os sexos
        var idade = ano - Number(fano.value) //calculando a idade
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto') //colocando o elemento da foto no js mas pode ser colocado na parte do html tambem
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 8 && idade < 17){
                //criança
                img.setAttribute('src','criancamenino.png') // ira checar a idade e mostrar a foto correspondente a idade e o sexo
            }else if (idade < 25){
                //jovem
                img.setAttribute('src','jovemmenino.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','adultohome.png')
            }else{
                //idoso
                img.setAttribute('src','idosohomem.png')
            }

        }else if (fsex[1].checked) {
            genero = "Mulher"
        }if (idade >= 8 && idade < 17){
            //criança
            img.setAttribute('src','criancamenina.png')
        }else if (idade < 25){
           //jovem
           img.setAttribute('src','jovemmenina.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','adultamulher.png')
        }else{
            //idoso
            img.setAttribute('src','idosamulher.png')
        }
        res.style.textAlign = 'center' //coloca o texto centralizado
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` //mostra a idade e o sexo após o programa ler a imagem
        res.appendChild(img) // assim que o usuario informa a idade e o sexo, a resposta vem com uma foto correspondente
     }
}
   