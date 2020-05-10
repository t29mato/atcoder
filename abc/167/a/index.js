input = require("fs").readFileSync("/dev/stdin", "utf8")
cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n)

var [s, t] = nexts(2)
// console.log(s, t)
console.log(s === t.slice(0, s.length) ? 'Yes' : 'No')
