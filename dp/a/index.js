const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const N = input[0].split(' ').map(item => parseInt(item))[0]
const H = input[1].split(' ').map(item => parseInt(item))

dp = new Array(N)
// console.log(dp)

const dfs = (pos) => {
    if (pos == 0) return dp[pos] = 0
    if (pos == 1) {
        if (!dp[0]) dp[0] = dfs(0)
        return dp[pos] = Math.abs(H[1] - H[0])
    }
    if (pos >= 2) {
        if (!dp[pos-1]) dp[pos-1] = dfs(pos-1)
        step1 = dp[pos-1] + Math.abs(H[pos] - H[pos-1])
        if (!dp[pos-2]) dp[pos-2] = dfs(pos-2)
        step2 = dp[pos-2] + Math.abs(H[pos] - H[pos-2])
        return dp[pos] = Math.min(step1, step2)
    }
}

console.log(dfs(N-1))
// console.log(dp)
