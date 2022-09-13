let x1 = 1;
let x2 = 7;
let y1 = 3;
let y2 = 6;

let x3 = x2 - x1;
let y3 = y2 - y1;

let x3squared = x3 ** 2;
let y3squared = y3 ** 2;

let sum = x3squared + y3squared;

let distance = Math.sqrt(sum);

console.log(distance);

console.log(`${distance} is the distance between coordinates (x1, y1)
and (x2, y2).`);
