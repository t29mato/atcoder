const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const firstLine = input[0].split(' ').map(item => parseInt(item))
const N = firstLine[0]
const Y = firstLine[1]

result = '-1 -1 -1'
for (i = 0; i <= N; i++) {
    for (j = 0; j <= N - i; j++) {
        for (k = N - (i + j); k <= N - (i + j); k++) {
            if (10000 * i + 5000 * j + 1000 * k === Y) {
                result = `${i} ${j} ${k}`
            }
        }
    }
}
console.log(result)
