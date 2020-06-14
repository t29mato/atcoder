const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(j=>parseInt(j))

function xArray(v){var a=arguments,l=a.length,r="Array(a["+--l+"]).fill().map(x=>{return "+v+";})";while(--l)r="Array(a["+l+"]).fill().map(x=>"+r+")";return eval(r);}

const [N, K] = nexts(2)
let A = nexts(N)

for (let j = 0; j < K; j++) {
    let Ans = Array(N+1).fill(0)
    for (let i = 0; i < N; i++) {
        Ans[Math.max(0, i-A[i])]++
        Ans[Math.min(N, A[i]+i+1)]--
    }
    if (Ans[0] === N && Ans[N] === -N) return console.log(Array(N).fill(N).join(' '))
    for (let i = 1; i < N; i++) {
        Ans[i] += Ans[i-1]
    }
    A = Ans;
}
console.log(A.slice(0, N).join(' '))
