// import function from file
const subtractNums = require('./subtractNumbers')

test('numbers successfully subtracted', () => {
    expect(
        //create a line that passes in two numbers to test 
        //to see that code works
        subtractNums(10,3)).toBe(7)
})