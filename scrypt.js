




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
        if (i == inp.value.length-1) {
            vet[j] = aux
        }
    }
    calc(vet)
}




function calc(vet) {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] == "×" || vet[i] == "/") {
            if (vet[i] == "×") {
                vet[i - 1] = Number(vet[i - 1]) * Number(vet[i + 1])
                vet[i] = null
                vet[i + 1] = null
            }
            else {
                vet[i - 1] = Number(vet[i - 1]) / Number(vet[i + 1])
                vet[i] = null
                vet[i + 1] = null
            }
        }
    }
    for (let i = 0; i < vet.length; i++) {

        let ant = ""
        let prox = ""
        if (vet[i] == "+" || vet[i] == "-") {
            if (vet[i] == "+") {
                let j = i - 1
                while (vet[j] == null) {
                    j = j--
                }
                ant = vet[j]
                vet[j] = null

                j = i + 1
                while (vet[j] == null) {
                    j = j++
                }
                prox = vet[j]
                vet[j] = null
                vet[i - 1] = Number(ant) + Number(prox)

                vet[i] = null
            }

            else{
                console.log("aqui")
                let j = i - 1
                while (vet[j] == null) {
                    j = j--
                }
                ant = vet[j]
                vet[j] = null

                j = i + 1
                while (vet[j] == null) {
                    j = j++
                }
                prox = vet[j]
                vet[j] = null

                vet[i - 1] = Number(ant) - Number(prox)

                vet[i] = null
            }
        }
    }
    let inp = document.getElementById('textMain')
    console.log(vet)
    for (let i = 0; i < vet.length; i++) {
        if (vet[i]!= null) {
            console.log(vet[i])
           inp.value = vet[i].toString()
        }
    }
}