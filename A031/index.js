let input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let temp = input[0].split(' ').map(item => parseInt(item))
const P = temp.splice(0, 3)
const k = temp[0]
count = 1
result = 1

for (i = 1, count = 1; true; i++) {
    console.log(`[${i}回目]`, count)
    if (k == 1) {
        console.log(1)
        return
    }
    if (count == 1) {
        count++
        continue
    }
    if (count == 10) return

    value = i
    countDivision = 0
    while (true) {
        isDivision = false
        P.forEach(item => {
            if (value % item == 0) {
                countDivision++
                isDivision = true
                value = value / item
            }
        });
        // console.log('value:', value)
        if (isDivision) continue
        if (countDivision == 0) {
            break
        }
        console.log(countDivision, value)
        if (countDivision > 0 && value == 1) {
            if (count == k) {
                console.log(i)
                return
            }
            count++
            break
        } else {
            console.log(value)
            break
        }
    }
}
