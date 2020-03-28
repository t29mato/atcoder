const Main = require('./index')

test('両者が最適な戦略を取った時,AliceはBobより何点多く取るかを出力してください.', () => {
    expect(Main('2\n3 1')).toBe(2)
})
test('両者が最適な戦略を取った時,AliceはBobより何点多く取るかを出力してください.', () => {
    expect(Main('3\n2 7 4')).toBe(5)
})
test('両者が最適な戦略を取った時,AliceはBobより何点多く取るかを出力してください.', () => {
    expect(Main('4\n20 18 2 18')).toBe(18)
})
