const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const N = next()
const lastN = N.slice(-1)

const hon = [2, 4, 5, 7, 9]
const pon = [0, 1, 6, 8]
const bon = [3]

if (hon.includes(parseInt(lastN))) console.log('hon')
if (pon.includes(parseInt(lastN))) console.log('pon')
if (bon.includes(parseInt(lastN))) console.log('bon')

return
