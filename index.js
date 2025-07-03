var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
let raio = parseFloat(lines[0]);

function formula(pi, raio) {
    return (4.0/3) * pi * Math.pow(raio, 3);
}

let calculo = formula(pi, raio);

console.log("VOLUME = " + calculo.toFixed(3));