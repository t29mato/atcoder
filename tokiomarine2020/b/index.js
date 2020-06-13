const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const [A, V, B, W, T] = nexts(5)

const distance = Math.abs(A - B)
if (V <= W) return console.log('NO')
const velocity = V - W
distance / velocity <= T ? console.log('YES') : console.log('NO')
