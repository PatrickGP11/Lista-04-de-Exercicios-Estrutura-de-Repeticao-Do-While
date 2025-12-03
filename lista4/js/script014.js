let nomes = [];
let i = 1;

do {
    nomes.push(prompt(`Digite o ${i}º nome:`));
    i++;
} while (i <= 5);

nomes.reverse();

console.log("Nomes invertidos:");
console.log(nomes);
