// Path: main.js
function calcular(){
    let valorA = document.getElementById("A").value;
    if(valorA == 0){
        alert("Valor invalido!");
        return;
    }

    let valorB = document.getElementById("B").value;
    let valorC = document.getElementById("C").value;

    //calculos de delta e bhaskara
    let delta = (valorB**2) - 4 * valorA * valorC;
    let x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
    let x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);



    //validação de delta
    if(delta < 0){
        alert("Delta negativo!");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O valor de delta é ${delta}\n
    O valor de x1 é ${x1}\n
    O valor de x2 é ${x2}`;
}

function limpar(){
    document.getElementById("A").value = "";
    document.getElementById("B").value = "";
    document.getElementById("C").value = "";
    document.getElementById("resultado").innerHTML = "";
}
