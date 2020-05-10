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
        before2 = new Array(...before)
        before3 = new Array(...before)
        // console.log('hoge', after, before2.splice(-after.length))
        if (JSON.stringify(after) == JSON.stringify(before3.splice(-after.length))) {
            console.log(A[i - after.length * 2 + K % after.length - 1])
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
