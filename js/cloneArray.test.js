// importing cloneArray function
const { expect } = require('@jest/globals')
const cloneArray = require('./cloneArray')


//testing the code
test('both arrays are a match', () => {
//create an array to test to make sure our array is our array
const array = [1,2,3,4,5]
expect(cloneArray(array)).toEqual(array)
//run another test to check to make sure
// your cloning the array not just running the original array
expect(cloneArray(array)).not.toBe(array)
})