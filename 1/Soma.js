let vetor = [];
let soma = 0;


for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    vetor.push(numero); 
}


for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) { 
        soma += vetor[i];     
    }
}


alert("Os números digitados foram: " + vetor.join(", "));
alert("A soma dos números pares é = " + soma);