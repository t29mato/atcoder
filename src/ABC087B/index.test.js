const Main = require('./index')

const sample1in = require("fs").readFile("./test/sample-1.in", "utf8")
const sample1out = require("fs").readFile("./test/sample-1.out", "utf8")
const sample2in = require("fs").readFile("./test/sample-2.in", "utf8")
const sample2out = require("fs").readFile("./test/sample-2.out", "utf8")
const sample3in = require("fs").readFile("./test/sample-3.in", "utf8")
const sample3out = require("fs").readFile("./test/sample-3.out", "utf8")


test('合計金額をちょうどX円にする方法は何通りありますか。', () => {
    expect(Main(sample1in)).toBe(sample1out)
})
test('合計金額をちょうどX円にする方法は何通りありますか。', () => {
    expect(Main(sample2in)).toBe(sample2out)
})
test('合計金額をちょうどX円にする方法は何通りありますか。', () => {
    expect(Main(sample3in)).toBe(sample3out)
})
