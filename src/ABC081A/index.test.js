const main = require('./index')

test('ビー玉が置かれるマスがいくつあるか求めてください。', () => {
    expect(main('001')).toBe(1)
})

test('ビー玉が置かれるマスがいくつあるか求めてください。', () => {
    expect(main('000')).toBe(0)
})

test('ビー玉が置かれるマスがいくつあるか求めてください。', () => {
    expect(main('11111111110')).toBe(10)
})
