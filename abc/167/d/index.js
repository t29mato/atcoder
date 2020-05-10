input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")

N = input[0].split(' ').map(i => parseInt(i))[0]
K = input[0].split(' ').map(i => parseInt(i))[1]

A = input[1].split(' ').map(i => parseInt(i))

// console.log(N, K, A)

before = []
after = []
pos = 0

for (i = 0; i <= K; i++) {
    // console.log(before, after, pos)
    if (after.length < 1) {
        if (!before.includes(A[pos])) {
            before.push(A[pos])
        } else {
            after.push(A[pos])
        }
    } else {
        if (before.includes(A[pos])) {
            loopFirst = before.indexOf(A[pos])
            loopLength = before.length - loopFirst
            console.log(A[loopLength - loopFirst + K % loopLength])
            return
        } else {
            after.push(A[pos])
        }
        // console.log(K, i, K == i)
        if (K == i) {
            console.log(A[pos - 1])
            return
        }
    }
    pos = A[pos] - 1
}
