const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const [X, Y] = nexts(2)
t = (Y - 2 * X) / 2
c = X - t
if (t >= 0 && c >= 0 && t + c == X && 4*t + 2*c == Y && Number.isInteger(t) && Number.isInteger(c)) {
    console.log('Yes')
} else {
    console.log('No')
}
