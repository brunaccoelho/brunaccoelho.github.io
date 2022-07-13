const btn01 = document.querySelector("#executa01")
const btn02 = document.querySelector("#executa02")
const btn03 = document.querySelector("#executa03")
const btn04 = document.querySelector("#executa04")


const btn1AddValor = document.querySelector("#q01-addValor")
const btn2AddValor = document.querySelector("#q02-addValor")

const getValor = (n) => parseFloat(document.querySelector("#q0"+n+"-valor").value) || 0

const insereValor = (lista, element) => {
    for (let i=0; i<element.length; i++)
        lista.push(parseFloat(element[i].textContent))
}

/*número 1*/
const somaArray = lista => {
    let resultado = 0;

    for(let i = 0; i < lista.length; i++){
        resultado += lista[i]
    }

    return resultado
}

const somaImpares = lista => {
    let resultado = 0;

    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 != 0)
            resultado += lista[i]
    }

    return resultado
}

const produtoArray = lista => {
    let resultado = 1;

    for(i = 0; i < lista.length; i++){
        resultado *= lista[i]
    }

    return resultado
}

btn1AddValor.addEventListener("click", () => {
    const listaVal = document.querySelector("#q01-valores")
    if(getValor(1))
        listaVal.innerHTML += `<li>${getValor(1)}</li>`
    document.getElementById('q01-valor').value=''
})

btn01.addEventListener("click", ()=>{
    const liValores = document.querySelectorAll("#q01-valores li")
    let lista = [];
    insereValor(lista, liValores);
    const listaResp = document.querySelector("#q01-results")
    listaResp.innerHTML += "Soma dos elementos: "+ somaArray(lista)
    listaResp.innerHTML += "<br>Soma dos elementos ímpares: "+ somaImpares(lista)
    listaResp.innerHTML += "<br>Produto dos elementos: "+ produtoArray(lista)
})

/*número 2*/
const imprimePrimos = (n) => {
    let divisores = 0;
    for(let i = 0; i <= n; i++){
        if(n % i == 0)
            divisores++;
    }

    let ehPrimo = (divisores > 2) ? 0 : 1;
    if(ehPrimo){
        return n;
    }
    
}

btn2AddValor.addEventListener("click", () => {
    const listaVal = document.querySelector("#q02-valores")
    if(getValor(2))
        listaVal.innerHTML += `<li>${getValor(2)}</li>`
    document.getElementById('q02-valor').value=''
})

btn02.addEventListener("click", ()=>{
    const liValores = document.querySelectorAll("#q02-valores li")
    let lista = [];
    let listaP = [];
    insereValor(lista, liValores)
    const listaResp = document.querySelector("#q02-results")
    if(lista.length < 2){
        for(let i = 2; listaP.length != lista[0]; i++){
            if(imprimePrimos(i) != undefined)
                listaP.push(imprimePrimos(i))
        }
    }
    else{ if(lista[0] < lista[1]){
            for(let i = lista[0]; i < lista[1]; i++){
                if(imprimePrimos(i) != undefined)
                    listaP.push(imprimePrimos(i))
            }
        }
    }
    for(let j = 0; j < listaP.length; j++)
        listaResp.innerHTML += listaP[j] + " "
})

/*número 3*/
const romano = numero => {
    const romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let aux = 0;
    let resultado = ""
    while (numero > 0) {
        if (numero >= decimal[aux]) {
            resultado += romanos[aux];
            numero -= decimal[aux];
        } else 
            aux++;
    }
    return resultado;
}

btn03.addEventListener("click", ()=>{
    const listaResp = document.querySelector("#q03-results")
    listaResp.innerHTML = romano(getValor(3))
})

/*número 4*/

const saqueMinimo = valor => {
    const notas = [100, 50, 20, 10, 5, 2]
    const tabela = document.querySelector("#q04-results")
    let i = 0
    let qtdNota = 0
    let qtdNotas= []
    let notasUsadas  = []
    while (valor > 0) {
        if (valor >= notas[i]) {
            qtdNota = parseInt(valor/notas[i])
            valor -= qtdNota*notas[i]
            if(qtdNota != 0)
                qtdNotas.push(qtdNota)
                notasUsadas.push(notas[i])
        } else {
            i++;
        }
    }
    tabela.innerHTML += "<tr>";
    for(j=0; j<qtdNotas.length; j++)
    {
        tabela.innerHTML += "<td>"+notasUsadas[j]+"</td><td>"+qtdNotas[j]+"</td>"
    }
    tabela.innerHTML += "</tr>";
}

btn04.addEventListener("click", ()=>{
    saqueMinimo(getValor(4))
})