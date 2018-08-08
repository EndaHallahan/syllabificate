const assert = require('assert');
const syl = require('../index');
const singleTests = require('./singleTests.json');

//General test case
assert(syl.countSyllables("a") === 1,"Something has gone horribly wrong. The counter is failing catastrophically. Check for syntax errors.");

//Test case insensitivity
assert(syl.countSyllables("ReAliZEd") === 3,"Count failed on test 'ReAliZEd': case insensitivity faliure, got "+syl.countSyllables("ReAliZEd"));

//test multiple words
assert(syl.countSyllables("Electric slide") === 4,"Count failed on test 'Electric slide': expected 4");

//test polys
assert(syl.countSyllablesAndPolys("Purple unicorns enjoy avocado a lot.")[1] === 2,"AndPoly failed: pollysyllable count faliure, expected 2");
assert(syl.countPolys("Purple unicorns enjoy avocado a lot.") === 2,"CountPoly failed: pollysyllable count faliure, expected 2");

//test empty strings
assert(syl.countSyllables("") === 0, "Count failed on empty string");
assert(syl.countSyllables(" ") === 0, "Count failed on space");

/*singleTests is a modified version of the unit tests used by Syllable 
(https://github.com/words/syllable), themselves borrowed from Text Statistics
(https://github.com/DaveChild/Text-Statistics). 
Modifications primarily revolved around the removal of non-english test cases
that do not adhere to English's syllabification rules. I felt it was more important to
focus on the language I'm primarily looking to measure than to try and build in
exceptions for these. I've also added some specific test cases of my own.
-RB
*/

//Accuracy tests, single word
Object.keys(singleTests).forEach(key => 
	assert(syl.countSyllables(key) === singleTests[key],"Count failed on test '"+key+"': expected "+singleTests[key]+", got "+syl.countSyllables(key))
	);

Object.keys(singleTests).forEach(key => 
	assert(syl.countSyllablesAndPolys(key)[0] === singleTests[key],"AndPoly failed on test '"+key+"': expected "+singleTests[key]+", got "+syl.countSyllablesAndPolys(key))
	);

//Accuracy tests, passages
const pTestOne = `The Threnody bled into the Requiem. The strings of the Nightbringer rang shrilly, harshly, like my gnashing teeth. 
	I lifted my head and glared into the swirling tempests. Lightning radiated all around me, but the thunder of the unsung realm wasn't enough to drown out my shouting voice.` // 72 syllables

const pTestTwo = `We were somewhere around Barstow on the edge of the desert when the drugs began to take hold. I remember saying something like “I feel a bit lightheaded; maybe you should drive…” 
	And suddenly there was a terrible roar all around us and the sky was full of what looked like huge bats, all swooping and screeching and diving around the car, which was going about 
	a hundred miles an hour with the top down to Las Vegas.` //103 syllables

const pTestThree = `In the not too distant future, next sunday A.D. There was a guy named Joel. Not too different from you or me!` //28 syllables

const pTestFour = `That was when she heard sirens, which at first she thought were municipal censorship to spare regular citizens from having to hear this kind of talk on community airtime, 
	but then she realized were actually on the road behind her.` //61 syllables

assert(syl.countSyllables(pTestOne) === 72, "Count failed on passage test 1: expected 72, got " + syl.countSyllables(pTestOne));
assert(syl.countSyllablesAndPolys(pTestOne)[0] === 72, "AndPoly failed on passage test 1: expected 72, got " + syl.countSyllablesAndPolys(pTestOne));

assert(syl.countSyllables(pTestTwo) === 103, "Count Failed on passage test 2: expected 103, got " + syl.countSyllables(pTestTwo));
assert(syl.countSyllablesAndPolys(pTestTwo)[0] === 103, "AndPoly failed on passage test 2: expected 103, got " + syl.countSyllablesAndPolys(pTestTwo));

assert(syl.countSyllables(pTestThree) === 27, "Count failed on passage test 3: expected 27, got " + syl.countSyllables(pTestThree))
assert(syl.countSyllablesAndPolys(pTestThree)[0] === 27, "AndPoly failed on passage test 3: expected 27, got " + syl.countSyllablesAndPolys(pTestThree))

assert(syl.countSyllables(pTestfour) === 61, "Count failed on passage 4: expected 61, got " + syl.countSyllables(pTestFour))
assert(syl.countSyllablesAndPolys(pTestFour)[0] === 61, "AndPoly failed on passage 4: expected 61, got " + syl.countSyllablesAndPolys(pTestFour))


console.log("All tests passed!");