const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const K = next()
const S = next()

if (S.length <= parseInt(K)) {
    console.log(S)
} else {
    console.log(S.slice(0, parseInt(K)) + '...')
}
