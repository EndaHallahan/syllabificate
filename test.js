const assert = require('assert');
const syl = require('./index');

//lint


//Test case insensitivity
assert(syl.countSyllables("UnIcorN") === 3,"Failed on test 'UnIcorN: case insensitivity faliure");

//test multiple words
assert(syl.countSyllables("Electric slide") === 4,"Failed on test 'Electric slide': expected 4");

//test polys
assert(syl.countSyllablesAndPolys("Purple unicorns enjoy avocado a lot.")[1] === 2,"Failed on test 'unicorns enjoy avocado a lot': expected 2");

//Accuracy tests
assert(syl.countSyllables("syllabificate") === 5,"Failed on test 'syllabificate': expected 5");
assert(syl.countSyllables("unicorn") === 3,"Failed on test 'unicorn': expected 3");
assert(syl.countSyllables("plutonium") === 4,"Failed on test 'plutonium': expected 4");
assert(syl.countSyllables("everything") === 3,"Failed on test 'everything': expected 3");
assert(syl.countSyllables("haughty") === 2,"Failed on test 'haughty': expected 2");
assert(syl.countSyllables("the") === 1,"Failed on test 'the': expected 1");
assert(syl.countSyllables("don't") === 1,"Failed on test 'don't: expected 1");
assert(syl.countSyllables("just") === 1,"Failed on test 'just': expected 1");
assert(syl.countSyllables("imagination") === 5,"Failed on test 'imagination': expected 5");
assert(syl.countSyllables("celestial") === 4,"Failed on test 'celestial': expected 4");
assert(syl.countSyllables("ago") === 2,"Failed on test 'ago': expected 2");
assert(syl.countSyllables("genuine") === 3,"Failed on test 'genuine': expected 3");
assert(syl.countSyllables("colloquialism") === 5,"Failed on test 'colloquialism': expected 5");


console.log("All tests passed!");