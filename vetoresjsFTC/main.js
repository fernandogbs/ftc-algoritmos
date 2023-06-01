var vetor = [5, 3, 8.4, 12, 8, 9, 78];
var soma = 0;
for(var i = 0; i <= vetor.length; i++){
    soma += vetor[i];
}


var media = soma / vetor.length;

console.log(`A soma do array ${vetor}: ${soma} \nA média do array ${vetor}: ${media}`);