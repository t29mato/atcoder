const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const N = parseInt(next())
const A = nexts(N).sort((a, b) => a - b)
count = N
for (let i = 0; i < N; i++) {
    if (A[i] == A[i+1]) {
        count--
        continue
    }
    for (let j = 0; j < i; j++) {
        if (A[i] % A[j] == 0) {
            count--
            break
        }
    }
}
console.log(count)
