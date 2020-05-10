let input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[0].split(' ').map(i => parseInt(i))

const A = input[0]
const B = input[1]
const C = input[2]

// const ABC = [
//     [1, input[0]],
//     [0, input[1]],
//     [-1, input[2]]
// ]
const K = input[3]

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
