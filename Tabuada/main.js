function tabuada(){
    let num = document.getElementById('numero');
    let resultado = document.getElementById('resultado');
    if(num == 0){
        alert('Por favor, digite um número!');
    }
    contador = 0;
    resultado.innerHTML = '';
    while(contador <= 10){
        resultado.innerHTML += `${num.value} x ${contador} = ${num.value * contador}\n`;
        contador++;
    }
}