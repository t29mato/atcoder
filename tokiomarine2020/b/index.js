const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const [A, V, B, W, T] = nexts(5)

for (let i = 1; i <= T; i++) {
    if (A > B && A + i * V <= B + i * W) {
        return console.log('YES')
    }
    if (A < B && A + i * V >= B + i * W) {
        return console.log('YES')
    }
}
console.log('NO')
