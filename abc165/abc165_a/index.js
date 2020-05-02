const Main = (input) => {
    array = input.split('\n')
    N = array.shift()
    array.pop()
    array = array[0].split(' ')
    arrayInt = array.map(item => parseInt(item))
    console.log(F(N, arrayInt[0], arrayInt[1]))
}

const F = (n, min, max) => {
    result = 'NG'
    for (i = min; i <= max; i++) {
        // console.log(i, min, max, i >= n, i % n == 0)
        if (i >= n && i % n == 0) {
            result = 'OK'
            break
        }
    }
    return result
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
