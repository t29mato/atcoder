const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const N = parseInt(next()) + 1
const A = nexts(N)

let array = [1, 2]
let count = 1
for (i = 2; i < 6; i++) {
    for (j = 0; j < count; j++) {
        array.push(array[array.length-1] + 2)
    }
    array.includes(item => console.log())
    count = count * 2
}
console.log(array)
