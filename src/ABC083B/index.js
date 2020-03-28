const Main = (input) => {
    const n = input.split(' ')
    N = n[0]
    A = n[1]
    B = n[2]
    count = 0
    for (i = 0; i <= N; i++) {
        s = String(i)

        numbers = s.split('')
        add = numbers.reduce((acc, cur) => {
            return acc + parseInt(cur)
        }, 0)
        if (A <= add && add <= B) {
            count += i
        }
    }
    console.log(count)
    return count
}

module.exports = Main
