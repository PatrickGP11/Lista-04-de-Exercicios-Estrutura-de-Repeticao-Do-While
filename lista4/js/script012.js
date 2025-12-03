let n = Number(prompt("Digite um número:"));
let fat = 1;
let i = 1;

do {
    fat *= i;
    i++;
} while (i <= n);

console.log(`Fatorial de ${n} = ${fat}`);
