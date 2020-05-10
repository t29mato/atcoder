const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const N = input[0].split(' ').map(item => parseInt(item))[0]
const H = input[1].split(' ').map(item => parseInt(item))

dp = new Array()
// console.log(dp)

const dfs = (pos) => {
    // console.log(pos, dp)
    if (dp[pos]) return dp[pos]
    if (pos == 0) return dp[pos] = 0
    if (pos == 1) return dp[pos] = dfs(pos-1) + Math.abs(H[pos] - H[pos-1])
    step1 = dfs(pos-1) + Math.abs(H[pos] - H[pos-1])
    step2 = dfs(pos-2) + Math.abs(H[pos] - H[pos-2])
    return dp[pos] = Math.min(step1, step2)
}

console.log(dfs(N-1))
// console.log(dp)
