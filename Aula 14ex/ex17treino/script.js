function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('select')

    if (num.value.length == 0) {
        alert('[ERRO] Campo número não preenchido!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`

            item.value = `${c}`

            tab.appendChild(item)
        }
    }
}