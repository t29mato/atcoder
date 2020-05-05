const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const N = input[0].split(' ').map(item => parseInt(item))[0]
const K = input[1].split(' ').map(item => parseInt(item))[0]

const greedy = (value, n, k) => {
    if (n == 0) {
        return value
    }
    if (n > 0) {
        a = value * 2
        b = value + k
        a < b ? value = a : value = b
        return greedy(value, n - 1, k)
    }
}

console.log(greedy(1, N, K))
