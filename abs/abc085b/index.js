const Main = (input) => {
    tmp = input.split('\n')
    numbers = tmp.map(n => parseInt(n))
    numbers.shift()
    array = []
    numbers.forEach(n => {
        if (array.indexOf(n) == -1) {
            array.push(n)
        }
    });
    console.log(array.length - 1)
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
