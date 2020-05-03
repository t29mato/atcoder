const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const NK = input[0].split(' ').map(item => parseInt(item, 10))
const N = NK[0]
const K = NK[1]
let d = []
let A = []
input.shift()
input.pop()
let dA = input.map(item => item.split(' ').map(item => parseInt(item, 10)))
nosuke = new Map()
for (i = 0; i < K; i++) {
    d.push(dA.shift())
    A.push(dA.shift())
    for (k = 0; k < d[i]; k++) {
        nosuke.set(A[i][k], true)
    }
}

console.log(N - nosuke.size)
