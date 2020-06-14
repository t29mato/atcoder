const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const [X, N] = nexts(2)
const p = nexts(N)

for (let i = 0; i < 100; i++) {
    if (!p.includes(X)) return console.log(X)
    if (!p.includes(X-i)) return console.log(X-i)
    if (!p.includes(X+i)) return console.log(X+i)
}
