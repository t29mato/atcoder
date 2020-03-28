const Main = require('./index')

test('ビー玉が置かれるマスがいくつあるか求めてください。', () => {
    expect(Main('001')).toBe(1)
})

test('ビー玉が置かれるマスがいくつあるか求めてください。', () => {
    expect(Main('000')).toBe(0)
})

test('ビー玉が置かれるマスがいくつあるか求めてください。', () => {
    expect(Main('11111111110')).toBe(10)
})
