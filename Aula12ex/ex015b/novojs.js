function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById('txtidade')
    var res = document.getElementById('res')
    // Se o ano de nascimento somente tiver um dígito ou for maior que o ano atual ou a idade for maior que 120 ocorrerá um erro
    if (nascimento.value.length == 0 || Number (nascimento.value) > ano || ano - nascimento.value > 120)  {
        alert('[ERRO] Verifique o ano de nascimento e tente novamente')
    } else {
        var sexo = document.getElementsByName('txtsex')
        var idade = ano - Number (nascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            if (idade >= 0 && idade <= 10) {
                genero = 'menino'
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                genero = 'jovem masculino'
                img.setAttribute('src', 'jovem_masculino.png')
            } else if (idade < 50) {
                genero = 'homem'
                img.setAttribute('src', 'homem.png')
            } else {
                genero = 'idoso'
                img.setAttribute ('src', 'idoso.png')
            }
        }
        if (sexo[1].checked) {
            if (idade >= 0 && idade <= 10) {
                genero = 'menina'
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                genero = 'jovem feminina'
                img.setAttribute('src', 'jovem_feminino.png')
            } else if (idade < 50) {
                genero = 'mulher'
                img.setAttribute('src', 'mulher.png')
            } else {
                genero = 'Idosa'
                img.setAttribute('src', 'idosa.png')
            }
        }
    }
    res.style.textAlign = 'center'
    img.style.marginTop = '20px'
    res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
