const Main = (input) => {
    array = input.split('\n')
    N = array.shift()
    array.pop()
    arrayInt = array.map(item => parseInt(item))
    console.log(findNumberFromArray(arrayInt))


}

const findNumberFromArray = (array) => {
    number = 0
    total = 0
    expectedTotal = array.length * (array.length + 1) / 2
    for (i = 0; i < array.length; i++) {
        if (array.indexOf(i + 1) >= 0) {
        } else {
            number = i + 1
        }
    }
    if (number) {
        array.forEach(n => {
            total += n;
        });
        return `${number + total - expectedTotal} ${number}`
    } else {
        return 'Correct'
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
