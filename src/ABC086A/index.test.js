const Main = require('./index')

test('積が奇数なら Odd と、 偶数なら Even と出力せよ。', () => {
    expect(Main('3 4')).toBe('Even')
})
