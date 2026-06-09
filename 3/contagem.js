let numeros = [];
let contagem = 0;


for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(num);
}


let numeroPesquisa = parseInt(prompt("Digite um número para pesquisar no vetor:"));


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroPesquisa) {
        contagem++;
    }
}


alert(`O número ${numeroPesquisa} aparece ${contagem} vez(es) no vetor.`);