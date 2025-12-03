let n = Number(prompt("Digite um número:"));
let soma = 0;
let i = 1;

do {
    if (i % 3 === 0) soma += i;
    i++;
} while (i <= n);

console.log("Soma dos múltiplos de 3 =", soma);
