const Main = (input) => {
    array = input.split('\n')
    S = array.shift()
    // array.pop()
    // array = array[0].split(' ')
    // arrayInt = array.map(item => parseInt(item))
    console.log(F(S))
}

const F = (contest) => { result = ''
    if (contest == 'ABC') {
        result = 'ARC'
    } else {
        result = 'ABC'
    }
    return result
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
