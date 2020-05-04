const Main = (input) => {
    array = input.split('\n')
    NMQ = array.shift().split(' ').map(item => parseInt(item))
    array.pop()
    // console.log(array)
    arrayInt = array.map(item => item.split(' ').map(value => parseInt(value)))
    // console.log(arrayInt)
    // arrayInt = array.map(item => parseInt(item))
    console.log(F(NMQ[0], NMQ[1], NMQ[2], arrayInt))
}

const F = (N, M, Q, A) => {
    console.log(N, M, Q, A)
    for (i = 1; i <= M; i++) {
    }
    // return count
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
