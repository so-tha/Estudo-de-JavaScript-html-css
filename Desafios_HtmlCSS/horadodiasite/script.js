function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '##c4dae5'
    } else if (hora >- 12 && hora <= 18){
        // Boa Tarde
        img.src = 'tarde.png'
        document.body.style.background = '#f4d679' // A cor que vai ficar de fundo e ira mudar denpendendo do horario
    } else {
        // Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#496686'
    }

}
