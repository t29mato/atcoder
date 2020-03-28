const Main = require('./index')

// const sample1in = require("fs").readFile("./test/sample-1.in", "utf8")
// const sample1out = require("fs").readFile("./test/sample-1.out", "utf8")
// const sample2in = require("fs").readFile("./test/sample-2.in", "utf8")
// const sample2out = require("fs").readFile("./test/sample-2.out", "utf8")
// const sample3in = require("fs").readFile("./test/sample-3.in", "utf8")
// const sample3out = require("fs").readFile("./test/sample-3.out", "utf8")


test('合計金額をちょうどX円にする方法は何通りありますか。', () => {
    expect(Main('2\n2\n2\n100')).toBe(2)
})

test('合計金額をちょうどX円にする方法は何通りありますか。', () => {
    expect(Main('30\n40\n50\n6000')).toBe(213)
})

test('合計金額をちょうどX円にする方法は何通りありますか。', () => {
    expect(Main('5\n1\n0\n150')).toBe(0)
})
