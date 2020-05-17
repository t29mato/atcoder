const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const K = next()
const S = next()

console.log(Math.sqrt(3**2 + 4**2 - 2 * 3 * 4 * Math.cos(80 *(Math.PI / 180))))
