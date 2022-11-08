'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  const isPositive = (value) => value > 0
  const isNegative = (value) => value < 0
  const isZero = (value) => value === 0
  const incremental = (pre, _) => parseInt(pre, 10) + 1
  const counting = (compare) => arr.filter(compare).reduce(incremental, [0])
  const positives = counting(isPositive)
  const negatives = counting(isNegative)
  const zeros = counting(isZero)

  return [positives, negatives, zeros]
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const [positives, negatives, zeros] = plusMinus(arr);
  console.log(positives / n)
  console.log(negatives / n)
  console.log(zeros / n)
}
