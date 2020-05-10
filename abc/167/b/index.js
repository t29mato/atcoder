input = require("fs").readFileSync("/dev/stdin", "utf8")
cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n)

const [A, B, C, K] = nexts(4)

count = 0
result = 0

if (K - count - A >= 0) {
    count += A
    result += A * 1
} else {
    console.log(K)
    return
}

if (K - count - B >= 0) {
    count += B
    result += B * 0
} else {
    console.log(result)
    return
}

result += (K - count) * (-1)

console.log(result)
