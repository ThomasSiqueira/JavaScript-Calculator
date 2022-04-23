
document.onkeydown = checkKey




function checkKey(e) {

    var keycode;
    if (window.event) {
        keycode = window.event.keyCode;
    }
    else if (e) {
        keycode = e.which;
    }

    if (keycode == 8) {

        back()
    }

    if (keycode == 103) {

        add(7)
    }
    if (keycode == 104) {

        add(8)
    }
    if (keycode == 105) {

        add(9)
    }
    if (keycode == 102) {

        add(6)
    }
    if (keycode == 101) {

        add(5)
    }
    if (keycode == 100) {

        add(4)
    }
    if (keycode == 99) {

        add(3)
    }
    if (keycode == 98) {

        add(2)
    }
    if (keycode == 97) {

        add(1)
    }
    if (keycode == 96) {

        add(0)
    }
    if (keycode == 111) {

        add("/")
    }
    if (keycode == 107) {

        add("+")
    }
    if (keycode == 109) {

        add("-")
    }
    if (keycode == 106) {

        add("×")
    }

    if (keycode == 110) {

        add(".")
    }
    if (keycode == 13) {

        parts()
    } 10


}



function add(a) {
    let inp = document.getElementById('textMain')
    if (inp.value == "0") {
        inp.value = a
    }
    else {
        inp.value = inp.value + a
    }
}


function clearAll() {
    let inp = document.getElementById('textMain')
    inp.value = "0"
}

function back() {
    let inp = document.getElementById('textMain')
    let aux = ""

    for (let i = 0; i < inp.value.length - 1; i++) {
        aux += inp.value[i]
    }
    inp.value = aux
}



function parts() {
    let inp = document.getElementById('textMain')
    let vet = new Array
    let j = 0
    let aux = "";
    for (let i = 0; i < inp.value.length; i++) {
        let val = inp.value[i]

        if (val == "/" || val == "+" || val == "-" || val == "×") {
            if (aux != "") {
                vet[j] = aux
                j++
                aux = ""
                vet[j] = val
                j++
            }
        }
        else {
            aux += inp.value[i]
        }
        if (i == inp.value.length - 1) {
            vet[j] = aux
        }
    }
    // console.log(vet)
    calc(vet)
}




function calc(vet) {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] == "×" || vet[i] == "/") {
            if (vet[i] == "×") {
                let ant = ""
                let j = i - 1
                while (vet[j] == null) {
                    j = j-1
                }
                ant = vet[j]
                vet[j] = null

                vet[i - 1] = Number(ant) * Number(vet[i + 1])
                vet[i + 1] = null
                vet[i] = null
            }
            else {
                let ant = ""
                let j = i - 1
                while (vet[j] == null) {
                    j = j-1
                }
                ant = vet[j]
                vet[j] = null

                vet[i - 1] = Number(ant) / Number(vet[i + 1])
                vet[i + 1] = null
                vet[i] = null
            }
            
        }
    }

    console.log(vet)
    for (let i = 0; i < vet.length; i++) {

        let ant = ""
        let prox = ""
        if (vet[i] == "+" || vet[i] == "-") {
            if (vet[i] == "+") {
                let j = i - 1
                while (vet[j] == null) {
                    j = j-1
                }
                ant = vet[j]
                vet[j] = null

                j = i + 1
                while (vet[j] == null) {
                    j = j+1
                }
                prox = vet[j]
                vet[j] = null
                vet[i - 1] = Number(ant) + Number(prox)

                vet[i] = null
            }

            else {
                let j = i - 1
                while (vet[j] == null) {
                    j = j-1
                }
                ant = vet[j]
                vet[j] = null

                j = i + 1
                while (vet[j] == null) {
                    j = j+1
                }
                prox = vet[j]
                vet[j] = null

                vet[i - 1] = Number(ant) - Number(prox)

                vet[i] = null
            }
        }
    }
    let inp = document.getElementById('textMain')
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] != null) {
            inp.value = vet[i].toString()
        }
        inp.valur = "error"
    }
}


function change() {
    let inp = document.getElementById('textMain')

    for (let i = 0; i < inp.value.length; i++) {
        console.log(inp.value)
        if (inp.value[i] != "/" && inp.value[i] != "+" && inp.value[i] != "-" && inp.value[i] != "×" && isNaN(inp.value[i]) == true) {
            inp.value = retirar(inp.value, i)
        }
    }
}


function retirar(vet, i) {

    let aux = ""
    for (let j = 0; j < vet.length; j++) {
        if (j != i) {
            aux += vet[j]
        }

    }
    return aux
}