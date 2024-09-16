// DO NOT CHANGE ANYTHING BETWEEN THE LINEs BELOW.

const prompCreator = require('prompt-sync');

const prompt = prompCreator();

const age = prompt('Enter a number: ');

console.log('age is ' + age);

// TODO: Checks the given age to see whether it's legal to vote in the US or not.
// Returns true if the age is 18 years or older. Otherwise, returns false.
const result = Boolean(age >=18);

// DO NOT CHANGE ANYTHING BELOW THIS LINE.
console.log('result= ' + result);

module.exports = {
  result,
};
