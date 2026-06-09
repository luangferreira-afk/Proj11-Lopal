let vetorAleatorio = [];


for (let i = 0; i < 7; i++) {
    
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    vetorAleatorio.push(numeroAleatorio);
}


alert("Valores gerados aleatoriamente: " + vetorAleatorio.join(", "));
console.log("Vetor:", vetorAleatorio);