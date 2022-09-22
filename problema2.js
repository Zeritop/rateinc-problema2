/*
    Author: Sebastian Lagos
    Email: info.trabajo.seba@gmail.com
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Completa la funcion 'miniMaxSum' de abajo.
 *
 * La funcion acepta un INTEGER_ARRAY arr como unico parametro.
 */

function miniMaxSum(arr) {
    // escribe tu codigo aqui
    let min = 0;
    let max = 0;
    let suma = 0;

    arr.forEach(a => {
        suma = suma + a;
    })

    min = suma - Math.max(arr);
    max = suma - Math.min(arr);

    return `Minimo ${min} Maximo ${max}`;

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}