const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const [N, K] = nexts(2)
let lamps = nexts(N)

for (let i = 0; i < K; i++) {
    let newLamps = Array(N).fill(0)
    lamps.forEach((lamp, i) => {
        for (let j = 0; j < N; j++) {
            if (i - lamp <= j && j <= i + lamp) {
                newLamps[j] += 1
            }
        }
    });
    lamps = newLamps
}
console.log(lamps.join(' '))
