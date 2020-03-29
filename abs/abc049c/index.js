const Main = (input) => {
    reverseMessage = input.split('\n')[0].split('').reverse().join('')
    reverseWord = ['dream', 'dreamer', 'erase', 'eraser'].map(word => word.split('').reverse().join(''))
    count = 0
    while(count < 4) {
        count = 0
        reverseWord.forEach(word => {
            if (reverseMessage.indexOf(word) === 0) {
                reverseMessage =　reverseMessage.replace(word, '')
            } else {
                count++
            }
        });
    }
    if (reverseMessage.length === 0) {
        console.log('YES')
    } else {
        console.log('NO');
    }
}

const recursion = (text) => {
    if (text.length === 0) {
        return 'YES'
    }
    const sleeping = ['dream', 'dreamer', 'erase', 'eraser']

    sleeping.map((s) => {
        idx = text.indexOf(s)
        trimText = text.replace(s, '')
        recursion(trimText)
    })
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
