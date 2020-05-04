const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const N = input[0]

result = 'No'
for (i = 1; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
        if (i * j == N) {
            result = 'Yes'
        }
    }
}

console.log(result)
