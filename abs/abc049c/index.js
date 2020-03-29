const Main = (input) => {
    tmp = input.replace('\n', '')
    recursion(tmp)
}

const recursion = (text) => {
    // console.log(text, text.length, result)
    if (text.length === 0) {
        return 'YES'
    }
    const sleeping = ['dream', 'dreamer', 'erase', 'eraser']

    sleeping.map((s) => {
        idx = text.indexOf(s)
        trimText = text.replace(s, '')
        recursion(trimText)
    })
    // sleeping.forEach((s) => {
    //     idx = text.indexOf(s)
    //     if (idx === -1) {
    //         return
    //     }
    //     trimText = text.replace(s, '')
    //     if (trimText.length === 0) {
    //         return
    //     }
    //     recursion(trimText, 'NO')
    // })
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
