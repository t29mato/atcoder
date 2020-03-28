const Main = (input) => {
    const N = input.split('\n')[0]
    const a = input.split('\n')[1].split(' ')
    const numbers = a.map(str => parseInt(str))
    array = []

    for (i = 0; i < N; i++) {
        max = Math.max(...numbers)
        array.push(max)
        numbers.splice(numbers.indexOf(max), 1)
    }

    alice = 0;
    bob = 0;
    array.reduce((prev, current, index) => {
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
