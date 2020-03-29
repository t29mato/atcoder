const Main = (input) => {
    tmp = input.split(' ')
    const N = tmp[0]
    const Y = parseInt(tmp[1])
    return calculate(N,Y)
}

const calculate = (n, y) => {
    for (i = 0; i <= n; i++) {
        remain = n - i
        for (j = 0; j <= remain; j++) {
            k = remain - j
            if (1e3 * (10 * i + 5 * j + k) === y) {
                console.log('%d %d %d', i, j, k)
                return
            }
        }
    }
    console.log('-1 -1 -1')
    return
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
