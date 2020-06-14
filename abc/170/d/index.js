const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))
const xArray = (n, v) => [...Array(n)].fill(v)

const N = parseInt(next())
let array = xArray(1e6+1, 0)
for (let i = 0; i < N; i++) {
    a = next()
    array[a]++
}
let ans = 0
for (let i = 0; i <= 1e6; i++) {
    if(array[i] === 0) continue;
    if(array[i] === 1) ans++;
    for (let j = i + i; j <= 1e6; j+=i) {
        array[j] = 0
    }
}
console.log(ans)
