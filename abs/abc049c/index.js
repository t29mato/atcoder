const Main = (input) => {
    const data = input.split('\n')[0]
    const regex = /^(erase|eraser|dream|dreamer)*$/g;
    if (data.match(regex)) {
        console.log('YES')
    } else {
        console.log('NO');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
