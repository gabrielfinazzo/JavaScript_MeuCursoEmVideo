function tabuada() {
    var num = document.getElementById('num')
    var n1 = Number(num.value)
    var n2 = 1

    if (num.value.length == '') {
        alert('[ERRO] Digite um número para execução da tabuada')
    } else {
        while (n2 <= 10) { 
            console.log(`${n1} x ${n2} = ${n1*n2}`)
            n2++
        }
    }
}