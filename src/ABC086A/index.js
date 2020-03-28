const main = (input) => {
    const tmp = input.split(' ')
    const a = tmp[0]
    const b = tmp[1]
    if (a * b % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}



module.exports = main
