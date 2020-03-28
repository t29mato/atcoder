const Main = (input) => {
    const N = input.split('\n')[0]
    const a = input.split('\n')[1].split(' ')
    const numbers = a.map(str => parseInt(str)).sort((a, b) => b - a)

    alice = 0;
    bob = 0;
    numbers.reduce((prev, current, index) => {
        if (index % 2) {
            bob += current
        } else {
            alice += current
        }
    }, 0)
    console.log(alice - bob)

    return alice - bob
}

module.exports = Main
