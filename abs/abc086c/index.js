const Main = (input) => {
    data = input.split('\n')
    const N = data[0]
    data.shift()
    data.pop()
    const initial = [0, 0, 0]
    array = data.map((item) => item.split(' ').map(i => parseInt(i)))
    result = 'NO'
    const calculate = array.reduce((prev, cur) => {
        time = cur[0] - prev[0]
        timeX = cur[1] - prev[1]
        timeY = cur[2] - prev[2]
        timeSum = timeX + timeY
        // console.log(time, timeX, timeY);
        if (timeSum <= time && (timeSum - time) %2 === 0) {
            result = 'Yes'
        } else {
            result = 'No'
        }
        return [time, timeX, timeY]
    }, initial)
    console.log(result)
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
