const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))
const T = next()
const array = T.split('').map((item) => {
    if (item === '?') {
        return 'D'
    } else {
        return item
    }
})
console.log(array.join(''))
