let input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const S = input[0]
const T = input[1]

const s = S.split('')
const t = T.split('')

// console.log(s, t)

result = true

for (i = 0; i < S.length; i++) {
    if (s[i] !== t[i]) result = false
}

if (s.length !== t.length - 1) result = false

console.log(result ? 'Yes' : 'No')
