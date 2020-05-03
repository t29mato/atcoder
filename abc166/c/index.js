let input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const NM = input.shift().split(' ').map(item => parseInt(item))
const N = NM[0]
const M = NM[1]
const H = input.shift().split(' ').map(item => parseInt(item))
input.pop() // lastが邪魔
const A = input.map(item => item.split(' ').map(value => parseInt(value)))

let road = []
for (i = 0; i <= N; i++) {
    road.push([])
}
for (i = 0; i < M; i++) {
    road[A[i][0]].push(A[i][1])
    road[A[i][1]].push(A[i][0])
}
let count = 0
for (i = 1; i <= N; i++) {
    if (road[i].length == 0) {
        count++
        continue
    }
    max = 0
    road[i].forEach(item => {
        if (H[item - 1] > max) max = H[item - 1]
    });
    if (max < H[i - 1]) count++
}
console.log(count)
