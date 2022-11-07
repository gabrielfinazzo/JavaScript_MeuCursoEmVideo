function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('select')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {

            //criação das opções que estaram dentro do select
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`

            // Essa configuração do item.value serve somente para a utilização do php
            item.value = `tab${c}`

            //Aplicação dos valores dentro do select
            tab.appendChild(item)
            
            c++
        }
    }
}

