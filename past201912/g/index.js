const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const firstLine = input[0].split(' ').map(item => parseInt(item))
const N = firstLine[0]

input.shift()

A = input
console.log(A)
