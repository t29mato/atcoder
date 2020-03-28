const Main = (input) => {
    tmp = input.split('\n')
    numbers = tmp.map(n => parseInt(n))
    numbers.shift()
    numbers.sort((a, b) => b - a)
    count = 0
    numbers.reduce((prev, current) => {
        if (prev == current) {
            return prev
        } else {
            count++
            return current
        }
    })
    console.log(count)
    return count
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
