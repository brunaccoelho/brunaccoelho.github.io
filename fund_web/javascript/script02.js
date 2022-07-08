/** 
 * obtem valor 
 */ 
const obtemValor = seletor => {
    const val = document.querySelector(seletor)
    let num = isNaN(parseFloat(val.value))? 0:parseFloat(val.value)
    val.value = ""
    return num
}

/** 
 * escrever valor 
 */ 
const escreveValor = (seletor, valor) => {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).textContent = ""
    document.querySelector(seletor).appendChild(nodeConteudo)
    //document.querySelector(seletor).innerHTML = `<h3>${valor}</h3>`
}

//atividade 01
const botao1 = document.querySelector(".executa01")

const fatorial = n => {
    let fator = 1;
    for(let i=n; i >= 1; i--)
        fator *= i;
    return "O fatorial de "+n+" é "+fator;
}

botao1.addEventListener("click", () => {
    const num1 = obtemValor("#questao01-val01")
    escreveValor("#resp01", fatorial(num1))
})

//atividade 02
const botao2 = document.querySelector(".executa02")

const potencia = n => {
    for(let i=1; i < 30; i++)
        document.getElementById("resp02").innerHTML += n**i +"; ";
}

botao2.addEventListener("click", () => {
    potencia(4)
})

//atividade 03
const botao3 = document.querySelector(".executa03")

const somaPar = n => {
    let soma = 0
    for(let i = 0; i <= 1000; i++){
        if(i % 2 == 0)
            soma += i;
    }
    return "A soma é "+soma;
}

botao3.addEventListener("click", () => {
    escreveValor("#resp03", somaPar())
})

//atividade 04
const botao4 = document.querySelector(".executa04")

const fibo = n => {
    let aux = 0;
    let num1 = 0;
    let num2 = 1;

    for (let i = 1; i <= n; i++){
        aux = num1 + num2;
        num1 = num2;
        num2 = aux;
        document.getElementById("resp04").innerHTML += num1 +"; ";
    }
}

botao4.addEventListener("click", () => {
    fibo(100)
})

//atividade 05
const botao5 = document.querySelector(".executa05")

const imprimePrimos = num => {
    let divisores = 0;
    for(let i = 1; i <= num; i++){
        if(num % i == 0)
            divisores++;
    }

    let primo = divisores > 2 ? false : true;

    if(primo)
        document.getElementById("resp05").innerHTML += num+"; ";
}

botao5.addEventListener("click", () => {
    for(let i=2; i<1000; i++)
        imprimePrimos(i);
})