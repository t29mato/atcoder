const Main = (input) => {
    const tmp = input.split('\n')
    const a = tmp[0]
    const b = tmp[1]
    const c = tmp[2]
    const x = tmp[3]

    count = 0
    for (i = 0; i <= a; i++) {
        for (j = 0; j <= b; j++) {
            for (k = 0; k <= c; k++) {
                if (500 * i + 100 * j + 50 * k == x) {
                    count++
                }
            }
        }
    }
    console.log(count)
    return count
}

module.exports = Main

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
