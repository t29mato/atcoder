const Main = require('./index')

test('作ることのできる鏡餅の最大の段数を出力せよ。', () => {
    expect(Main('4\n10\n8\n8\n6')).toBe(3)
})
test('作ることのできる鏡餅の最大の段数を出力せよ。', () => {
    expect(Main('3\n15\n15\n15')).toBe(1)
})

test('作ることのできる鏡餅の最大の段数を出力せよ。', () => {
    expect(Main('7\n50\n30\n50\n100\n50\n80\n30')).toBe(4)
})

test('作ることのできる鏡餅の最大の段数を出力せよ。', () => {
    expect(Main('20\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20')).toBe(20)
})
