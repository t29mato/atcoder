const Main = input => {
    data = input.slice(1, +input[0] + 1)
    numbers = data.map(item => item.split(' ').map(i => parseInt(i)))
    result = 'NO'
    numbers.reduce((prev, cur) => {
        time = cur[0] - prev[0]
        timeX = Math.abs(cur[1] - prev[1])
        timeY = Math.abs(cur[2] - prev[2])
        timeSum = timeX + timeY
        if (timeSum <= time && timeSum % 2 === time % 2) {
            result = 'Yes'
        } else {
            result = 'No'
        }
        return [cur[0], cur[1], cur[2]]
    }, [0, 0, 0])
    console.log(result)
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split('\n'));
