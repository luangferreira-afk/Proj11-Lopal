let vetorOriginal = [];
let vetorSemDuplicatas = [];


for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número:`));
    vetorOriginal.push(num);
}


for (let i = 0; i < vetorOriginal.length; i++) {

    if (!vetorSemDuplicatas.includes(vetorOriginal[i])) {
        vetorSemDuplicatas.push(vetorOriginal[i]);
    }
}


alert("Vetor Original: " + vetorOriginal.join(", "));
alert("Vetor Sem Duplicatas: " + vetorSemDuplicatas.join(", "));