let a = 0, b = 1;
let count = 1;

console.log(a);
console.log(b);

do {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
    count++;
} while (count <= 8);
