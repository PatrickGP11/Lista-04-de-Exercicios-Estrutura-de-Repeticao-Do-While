let soma = 0;
let i = 1;

do {
    soma += Number(prompt(`Digite o ${i}º número:`));
    i++;
} while (i <= 5);

console.log("Média =", soma / 5);
