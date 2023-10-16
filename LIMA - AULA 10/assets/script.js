function ex1(){
    let a = document.getElementById("A").value
    let b = document.getElementById("B").value
    let c = document.getElementById("C").value

    let resultado = (a + b) / c

    let str = document.querySelector(".resultado")
    str.innerHTML = resultado.toFixed(2)
}

function ex2(){
    let a = document.getElementById("velocidade").value
    let b = document.getElementById("distância").value

    document.querySelector(".resultado2").innerHTML = (b / a).toFixed(2)
}

function ex3(){
    let nome = document.getElementById("nome").value
    let b = Number(document.getElementById("salario").value)
    let c = Number(document.getElementById("reajuste").value)

    document.querySelector(".resultado3").innerHTML = `${nome}Seu salario é:${b * ((c + 100) / 100).toFixed(2)}`
}

function ex4(){
    let nome = document.getElementById("nome").value
    let vitorias = Number(document.getElementById("vitorias").value)
    let derrotas = Number(document.getElementById("derrotas").value)

    document.querySelector(".resultado4").innerHTML = `${nome} ${(vitorias * 3) + derrotas}`
}