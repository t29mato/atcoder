input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")

N = input[0].split(' ').map(i => parseInt(i))[0]
K = input[0].split(' ').map(i => parseInt(i))[1]

A = input[1].split(' ').map(i => parseInt(i))

// console.log(N, K, A)

before = []
after = []
pos = 0

for (i = 0; i < K; i++) {
    console.log('初', before, after,pos)

    before.forEach((value, index) => {

    });

    if (before.includes(A[pos])) {
        console.log('あ', after, before.slice(-after.length))
        if (after == before.slice(-after.length)) {
            console.log(before, after)
            console.log('い', A[before.length - after.length + K % after.length])
            return
        } else {
            after.push(A[pos])
            pos = A[pos] - 1
            continue
        }
    }
    if (i == K - 1) {
        console.log('う', A[pos])
    }
    before.push(A[pos])
    pos = A[pos] - 1
}
