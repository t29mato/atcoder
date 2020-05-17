const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const [N, M] = nexts(2)
console.log(N, M)

let routes = []
for (let i = 0; i < M; i++) {
    routes.push(nexts(2))
}

let memo = new Array(M)
memo.fill('No')
memo[0] = 'Yes'

const array = []
routes.forEach((route, index) => {
    if (route.includes(index + 1)) {
        if (route[0] === 1) {
            array.push(route[1])
        } else {
            array.push(route[0])
        }
    }
})
