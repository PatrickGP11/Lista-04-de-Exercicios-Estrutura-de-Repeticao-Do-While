let cont = 0;
let i = 1;

do {
    let idade = Number(prompt(`Digite a idade ${i}:`));
    if (idade >= 18) cont++;
    i++;
} while (i <= 10);

console.log("Maiores de idade:", cont);
