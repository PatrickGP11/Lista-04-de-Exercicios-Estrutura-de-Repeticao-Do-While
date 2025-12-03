let maior = -Infinity;
let menor = Infinity;

let i = 1;
do {
    let num = Number(prompt(`Digite o ${i}º número:`));
    if (num > maior) maior = num;
    if (num < menor) menor = num;
    i++;
} while (i <= 10);

console.log("Maior:", maior);
console.log("Menor:", menor);
