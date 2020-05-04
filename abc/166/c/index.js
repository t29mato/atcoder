let input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const NM = input.shift().split(' ').map(item => parseInt(item))
const N = NM[0]
const M = NM[1]
const H = input.shift().split(' ').map(item => parseInt(item))
input.pop() // lastが邪魔
const A = input.map(item => item.split(' ').map(value => parseInt(value)))
let goodPlaceList = new Array(N).fill(true)

// console.log('H: ', H)
// console.log('A: ', A)

for (i = 0; i < M; i++) {
    // console.log(i)
    // console.log(H[A[i][0]-1], H[A[i][1]-1])
    if (H[A[i][0]-1] <= H[A[i][1]-1]) {
        goodPlaceList[A[i][0]-1] = false
    }
    if (H[A[i][1]-1] <= H[A[i][0]-1]) {
        goodPlaceList[A[i][1]-1] = false
    }
}
console.log(goodPlaceList.filter((isGood => isGood == true)).length)
