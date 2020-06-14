const input = require("fs").readFileSync("/dev/stdin", "utf8")
cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(j=>parseInt(j))

const N = next()
H = nexts(N)
H.pop()
M = Array(N)

for (i = 0; i < N; i++) {
    if (i == 0) {
        M[i] = 0
    } else if (i == 1) {
        M[i] = M[i-1] + Math.abs(H[i] - H[i-1])
    } else {
        M[i] = Math.min(
            M[i-2] + Math.abs(H[i] - H[i-2]),
            M[i-1] + Math.abs(H[i] - H[i-1])
            )
        }
    }
    console.log(M.pop())
