const Main = (input) => {
    const numbers = input.split('\n')[1]
    const array = numbers.split(' ')

    const count = array.reduce((prev, cur, index) => {
        curCount = countSplit2(cur, 0)
        if (index == 0) {
            return curCount
        }
        return Math.min(prev, curCount)
    }, 0)
    console.log(count)
    return count
}

const countSplit2 = (number, count) => {
    if (number == 0) {
        return 0
    }
    if (number % 2 == 1) {
        return count
    } else {
        number = number / 2
        count += 1
        return countSplit2(number, count)
    }
}

module.exports = Main
