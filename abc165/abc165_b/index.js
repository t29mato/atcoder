const Main = (input) => {
    // array = input.split('\n')
    // N = array.shift()
    // array.pop()
    // array = array[0].split(' ')
    // arrayInt = array.map(item => parseInt(item))
    console.log(F(input, 100))
}

const F = (total, initial) => {
    count = 0
    price = initial
    for (i = 0; price < total; i++) {
        // console.log(price, total)
        price *= 1.01
        price = Math.floor(price)
        count = i + 1
    }
    return count
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
