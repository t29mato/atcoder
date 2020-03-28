const main = require('./index')

test('積が奇数なら Odd と、 偶数なら Even と出力せよ。', () => {
    expect(main('3 4')).toBe('Even')
})
