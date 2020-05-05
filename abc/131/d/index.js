const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const N = input[0].split(' ').map(item => parseInt(item))[0]
input.shift()
input.pop()

const AB = input.map(item => item.split(' ').map(item2 => parseInt(item2)))
const A = AB.map(item => item[0])
const B = AB.map(item => item[1])

count = 0
for (i = 0; i < N; i++) {
    min_index = 0
    // console.log(AB)
    AB.reduce((prev, current, index) => {
        // console.log(prev, current, index, min_index)
        if (prev[1] <= current[1]) {
            return prev
        } else {
            min_index = index
            return current
        }
    })
    count += AB[min_index][0]
    if (count > AB[min_index][1]) {
        console.log('No')
        return
    }
    AB.splice(min_index, 1)
}

console.log('Yes')
