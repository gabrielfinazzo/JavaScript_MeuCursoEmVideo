function contagem() {
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('steps')
    var res = document.getElementById('res')
    var st = Number(start.value)
    var ed = Number(end.value)
    var stp = Number(step.value)
    if (start.value.length == 0 || ed <= st || st < 0) {
        alert('[Erro] Algo deu errado! Preencha o campo de forma correta!')
        res.innerHTML = 'Impossível contar!'
    } else if (end.value.lenght == 0 || ed <= 0) {
        alert('[Erro] Algo deu errado! Preencha o campo de forma correta!')
        res.innerHTML = 'Impossível contar!'
    } else if (step.value.length == 0 || stp <= 0) {
        alert('[Erro] O valor do PASSO ficou vazio ou igual a 0! Altere para um valor apartir de 1.')
        res.innerHTML = 'Impossível contar!'
    } else {
        while (st <= ed) {
            res.innerHTML += ` ${st} &#128073` 
            st = st + stp
        }
    }
}