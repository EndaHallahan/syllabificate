const assert = require('assert');
const syl = require('./index');

//Test case insensitivity
assert(syl.countSyllables("UnIcorN") === 3,"Failed on test 'UnIcorN: case insensitivity faliure");

//test multiple words
assert(syl.countSyllables("Electric slide") === 4,"Failed on test 'Electric slide': expected 4");

//test polys
assert(syl.countSyllablesAndPolys("Purple unicorns enjoy avocado a lot.")[1] === 2,"Failed on test 'unicorns enjoy avocado a lot': pollysyllable count faliure, expected 2");

//Accuracy tests, single
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
assert(syl.countSyllables("miserable") === 4,"Failed on test 'miserable': expected 4");
assert(syl.countSyllables("cattle") === 2,"Failed on test 'cattle': expected 2");
assert(syl.countSyllables("rhythm") === 1,"Failed on test 'rhythm': expected 1");
assert(syl.countSyllables("bulkier") === 3,"Failed on test 'bulkier': expected 3");
assert(syl.countSyllables("rattled") === 2,"Failed on test 'rattled': expected 2");
assert(syl.countSyllables("terrible") === 3,"Failed on test 'terrible': expected 3");

//Accuracy tests, passages
//1
assert(syl.countSyllables(`The Threnody bled into the Requiem. The strings of the Nightbringer rang shrilly, harshly, like my gnashing teeth. 
	I lifted my head and glared into the swirling tempests. Lightning radiated all around me, but the thunder of the unsung realm wasn't enough to drown out my shouting voice.
	`) === 72, "Failed on passage test 1a: expected 72");
assert(syl.countSyllablesAndPolys(`The Threnody bled into the Requiem. The strings of the Nightbringer rang shrilly, harshly, like my gnashing teeth. 
	I lifted my head and glared into the swirling tempests. Lightning radiated all around me, but the thunder of the unsung realm wasn't enough to drown out my shouting voice.
	`)[0] === 72, "Failed on passage test 1b: expected 72");

//2
assert(syl.countSyllables(`We were somewhere around Barstow on the edge of the desert when the drugs began to take hold. I remember saying something like “I feel a bit lightheaded; maybe you should drive…” 
	And suddenly there was a terrible roar all around us and the sky was full of what looked like huge bats, all swooping and screeching and diving around the car, which was going about 
	a hundred miles an hour with the top down to Las Vegas.`) === 103, "Failed on passage test 2a: expected 103");
assert(syl.countSyllablesAndPolys(`We were somewhere around Barstow on the edge of the desert when the drugs began to take hold. I remember saying something like “I feel a bit lightheaded; maybe you should drive…” 
	And suddenly there was a terrible roar all around us and the sky was full of what looked like huge bats, all swooping and screeching and diving around the car, which was going about 
	a hundred miles an hour with the top down to Las Vegas.`)[0] === 103, "Failed on passage test 2b: expected 103");

//3
assert(syl.countSyllables(`In the not too distant future, next sunday A.D. 
	There was a guy named Joel. Not too different from you or me!`) === 27, "Failed on passage test 3a: expected 27")
assert(syl.countSyllablesAndPolys(`In the not too distant future, next sunday A.D. 
	There was a guy named Joel. Not too different from you or me!`)[0] === 27, "Failed on passage test 3b: expected 27")

console.log("All tests passed!");