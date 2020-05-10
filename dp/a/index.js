const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const N = input[0].split(' ').map(item => parseInt(item))[0]
const H = input[1].split(' ').map(item => parseInt(item))

dp = new Array()
// console.log(dp)
dp[0] = 0
dp[1] = Math.abs(H[1] - H[0])
for (i=2; i<N; i++) {
    dp[i] = Math.min(dp[i-1] + Math.abs(H[i]-H[i-1]), dp[i-2] + Math.abs(H[i]-H[i-2]))
}

console.log(dp[N-1])
