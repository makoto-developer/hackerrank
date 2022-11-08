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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  const sortedList = arr.sort()
  const minGroup = [...sortedList].slice(0, 4)
  const maxGroup = [...sortedList].slice(1, 5)
  const sum = (pre, val) => parseInt(pre, 10) + parseInt(val, 10)
  const min = minGroup.reduce(sum, [0])
  const max = maxGroup.reduce(sum, [0])
  return `${min} ${max}`
}

function main() {

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result = miniMaxSum(arr);
  console.log(result)
}
