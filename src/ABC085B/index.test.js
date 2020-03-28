const Main = require('./index')

test('作ることのできる鏡餅の最大の段数を出力せよ。', () => {
    expect(Main('4\n10\n8\n8\n6')).toBe(3)
})
