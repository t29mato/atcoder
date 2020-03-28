const Main = (input) => {
    const array = input.split('')
    const count = array.reduce((a, c, i) => {
        if (c == 1) {
            a += 1
        }
        return a
    }, 0)
    return count
}

module.exports = Main
