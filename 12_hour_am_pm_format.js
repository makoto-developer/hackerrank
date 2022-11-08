'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let hour = parseInt(s.slice(0, 2), 10)
  const minuts = parseInt(s.slice(3,5), 10)
  const second = parseInt(s.slice(6, 8), 10)
  const ampm = s.slice(8, 10)

  if (ampm === 'PM' && hour < 12) {
    hour = hour + 12
  } else if (ampm === 'AM' && hour >= 12) {
    hour = hour - 12
  }

  return `${`${parseInt(hour)}`.padStart(2, '0')}:${`${minuts}`.padStart(2, '0')}:${`${second}`.padStart(2, '0')}`
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
