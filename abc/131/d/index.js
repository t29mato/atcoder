const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const N = input[0].split(' ').map(item => parseInt(item))[0]
input.shift()
input.pop()

AB = input.map(item => item.split(' ').map(item2 => parseInt(item2)))
const A = AB.map(item => item[0])
const B = AB.map(item => item[1])

// console.log(AB)
AB.sort((a, b) => a[1] - b[1])
// console.log(AB)

count = 0
for (i = 0; i < N; i++) {
    count += AB[i][0]
    if (count > AB[i][1]) {
        console.log('No')
        return
    }
}
console.log('Yes')
