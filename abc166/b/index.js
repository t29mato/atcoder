const Main = (input) => {
    d = []
    A = []
    array = input.split('\n')
    NK = array.shift()
    array.pop()
    dA = array.map(item => item.split(' ').map(value => parseInt(value)))
    NK = NK.split(' ').map(item => parseInt(item))
    for (i = 0; i < NK[1]; i++) {
        d.push(dA.shift())
        A.push(dA.shift())
    }
    console.log(F(NK[0], NK[1], d, A))
}

const F = (N, K, d, A) => {
    // console.log('N: ', N)
    // console.log('K: ', K)
    // console.log('d: ', d)
    // console.log('A: ', A)
    nosuke = new Map()
    for (i = 0; i < K; i++) {
        for (k = 0; k < d[i]; k++) {
            nosuke.set(A[i][k], true)
        }
    }
    result = N - nosuke.size
    return result
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
