const botao1 = document.querySelector(".executa01")

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
/** 
 * calcula soma 
 */ 
const somar = (num1, num2) => num1 + num2

botao1.addEventListener("click", () => {
    const num1 = obtemValor("#questao01-val01")
    const num2 = obtemValor("#questao01-val02")
    escreveValor("#resp01", somar(num1, num2))
})

//atividade 02
/**
 * indica o maior entre dois números
 */
 const botao2 = document.querySelector(".executa02")
/**
 * Identifica o maior número
 */
const identificaMaiorNum = (num1, num2) => {
    let resp = ""
    if(num1>num2)
        resp = `O número ${num1} é maior que ${num2}`
    else if(num2>num1)
        resp = `O número ${num2} é maior que ${num1}`
    else
        resp = `Os números são iguais`
    return resp
}

botao2.addEventListener("click", () => {
    const num1 = obtemValor("#questao02-val01")
    const num2 = obtemValor("#questao02-val02")

    escreveValor("#resp02", identificaMaiorNum(num1, num2))
})

//atividade 03
/**
 * indica se um numero é primo
 */
    const botao3 = document.querySelector(".executa03")
/**
 * Identifica se um número é primo
 */
const primo = (num) => {
    let resp = ""
    let divisores = 0;
    for(let i = 1; i <= num; i++){
        if(num % i == 0)
            divisores++;
    }

    return (divisores > 2) ? "O número não é primo" : "O número é primo";
}

botao3.addEventListener("click", () => {
    const num = obtemValor("#questao03-val01")

    escreveValor("#resp03", primo(num))
})

//atividade 03
/**
 * hipotenusa
 */
const botao4 = document.querySelector(".executa04")
/**
 * Calcula hipotenusa
 */
const hipotenusa = (num1, num2) => {
    let resp = ""
    
    return (Math.sqrt(Math.pow(num1,2) + Math.pow(num2,2)))
}

botao4.addEventListener("click", () => {
    const num1 = obtemValor("#questao04-val01")
    const num2 = obtemValor("#questao04-val02")

    escreveValor("#resp04", hipotenusa(num1,num2))
})

//atividade 05
/**
 * calcula novo salario
 */
const botao5 = document.querySelector(".executa05")
/**
 * calcula novo salario
 */
const reajusteSalarial = (salario, p) => {
    let resp = ""
    return salario*(1+p/100);
}

botao5.addEventListener("click", () => {
    const salario = obtemValor("#questao05-val01")
    const p = obtemValor("#questao05-val02")

    escreveValor("#resp05", reajusteSalarial(salario,p))
})

//atividade 06
/**
 * calcula valor carro
 */
const botao6 = document.querySelector(".executa06")
/**
 *  calcula valor carro
 */
const valorCarro = (num1) => {
    let resp = ""
    return num1 + (num1*0.28) + (num1*0.45)
}

botao6.addEventListener("click", () => {
    const num1 = obtemValor("#questao06-val01")

    escreveValor("#resp06", valorCarro(num1))
})

//atividade 07
/**
 * calcula novo salario
 */
const botao7 = document.querySelector(".executa07")
/**
 * calcula novo salario
 */
const revendedorSalario = (num1, num2, num3, num4) => {
    let resp = ""
    return num3 + (num2*0.05) + (num1 * num4)
}

botao7.addEventListener("click", () => {
    const num1 = obtemValor("#questao07-val01")
    const num2 = obtemValor("#questao07-val02")
    const num3 = obtemValor("#questao07-val03")
    const num4 = obtemValor("#questao07-val04")

    escreveValor("#resp07", revendedorSalario(num1, num2, num3, num4))
})

//atividade 08
/**
 * converte para celsius
 */
const botao8 = document.querySelector(".executa08")
/**
 * converte para celsius
 */
const converteTemperatura = (num1) => {
    let resp = ""
    return (5*(num1-32))/9;
}

botao8.addEventListener("click", () => {
    const num1 = obtemValor("#questao08-val01")

    escreveValor("#resp08", converteTemperatura(num1))
})

//atividade 09
/**
 * calcula média
 */
const botao9 = document.querySelector(".executa09")
/**
 * Calcula media
 */
const calculaMedia = (num1, num2, num3) => {
    let resp = ""
    return (num1 * 2 + num2 * 3 + num3 * 5)/10;
}

botao9.addEventListener("click", () => {
    const num1 = obtemValor("#questao09-val01")
    const num2 = obtemValor("#questao09-val02")
    const num3 = obtemValor("#questao09-val03")

    escreveValor("#resp09", calculaMedia(num1, num2, num3))
})

//atividade 10
/**
 * calcula valor maçãs
 */
const botao10 = document.querySelector(".executa10")
/**
 * calcula valor maçãs
 */
const calculaMacas = (qtd) => {
    let resp = ""
    if(qtd < 12)
        return qtd*1.3
    return qtd
}

botao10.addEventListener("click", () => {
    const num1 = obtemValor("#questao10-val01")

    escreveValor("#resp10", calculaMacas(num1))
})
// botao.onclick = alteraConteudo
// botao.onclick = alteraCorDeFundo