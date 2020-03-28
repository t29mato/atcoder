const Main = (input) => {
    tmp = input.split('\n')
    numbers = tmp.map(n => parseInt(n))
    numbers.shift()
    numbers.sort((a, b) => b - a)
    count = 1
    numbers.reduce((prev, current) => {
        console.log(prev, current)
        if (prev == current) {
            return prev
        } else {
            count++
            return current
        }
    })
    console.log(count)
    return count
}

module.exports = Main
