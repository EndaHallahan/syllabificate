const assert = require('assert');
const syl = require('./index');

//Test case insensitivity
assert(syl.countSyllables("ReAliZEd") === 3,"Count failed on test 'ReAliZEd': case insensitivity faliure");

//test multiple words
assert(syl.countSyllables("Electric slide") === 4,"Count failed on test 'Electric slide': expected 4");

//test polys
assert(syl.countSyllablesAndPolys("Purple unicorns enjoy avocado a lot.")[1] === 2,"AndPoly failed: pollysyllable count faliure, expected 2");
assert(syl.countPolys("Purple unicorns enjoy avocado a lot.") === 2,"CountPoly failed: pollysyllable count faliure, expected 2");

//test empty strings
assert(syl.countSyllables("") === 0, "Count failed on empty string");
assert(syl.countSyllables(" ") === 0, "Count failed on space");

//Accuracy tests, single word
assert(syl.countSyllables("syllabificate") === 5,"Count failed on test 'syllabificate': expected 5");
assert(syl.countSyllables("unicorn") === 3,"Count failed on test 'unicorn': expected 3");
assert(syl.countSyllables("plutonium") === 4,"Count failed on test 'plutonium': expected 4");
assert(syl.countSyllables("everything") === 3,"Count failed on test 'everything': expected 3");
assert(syl.countSyllables("haughty") === 2,"Count failed on test 'haughty': expected 2");
assert(syl.countSyllables("the") === 1,"Count failed on test 'the': expected 1");
assert(syl.countSyllables("don't") === 1,"Count failed on test 'don't': expected 1");
assert(syl.countSyllables("just") === 1,"Count failed on test 'just': expected 1");
assert(syl.countSyllables("imagination") === 5,"Count failed on test 'imagination': expected 5");
assert(syl.countSyllables("celestial") === 4,"Count failed on test 'celestial': expected 4");
assert(syl.countSyllables("ago") === 2,"Count failed on test 'ago': expected 2");
assert(syl.countSyllables("genuine") === 3,"Count failed on test 'genuine': expected 3");
assert(syl.countSyllables("colloquialism") === 5,"Count failed on test 'colloquialism': expected 5");
assert(syl.countSyllables("miserable") === 4,"Count failed on test 'miserable': expected 4");
assert(syl.countSyllables("cattle") === 2,"Count failed on test 'cattle': expected 2");
assert(syl.countSyllables("rhythm") === 1,"Count failed on test 'rhythm': expected 1");
assert(syl.countSyllables("bulkier") === 3,"Count failed on test 'bulkier': expected 3");
assert(syl.countSyllables("rattled") === 2,"Count failed on test 'rattled': expected 2");
assert(syl.countSyllables("terrible") === 3,"Count failed on test 'terrible': expected 3");
assert(syl.countSyllables("realize") === 3,"Count failed on test 'realize': expected 3");
assert(syl.countSyllables("realized") === 3,"Count failed on test 'realized': expected 3");
assert(syl.countSyllables("realizes") === 4,"Count failed on test 'realizes': expected 4");
assert(syl.countSyllables("realizing") === 4,"Count failed on test 'realizing': expected 4");
assert(syl.countSyllables("watershed") === 3,"Count failed on test 'watershed': expected 3");
assert(syl.countSyllables("famished") === 2,"Count failed on test 'famished': expected 2");
assert(syl.countSyllables("unabashedly") === 5,"Count failed on test 'unabashedly': expected 5");
assert(syl.countSyllables("zion") === 2,"Count failed on test 'zion': expected 2");
assert(syl.countSyllables("pollution") === 3,"Count failed on test 'pollution': expected 3");
assert(syl.countSyllables("weilded") === 3,"Count failed on test 'weilded': expected 3");
assert(syl.countSyllables("suggestiveness") === 4,"Count failed on test 'suggestiveness': expected 4");
assert(syl.countSyllables("liver") === 2,"Count failed on test 'liver': expected 2");
assert(syl.countSyllables("stereoscopic") === 5,"Count failed on test 'stereoscopic': expected 5");
assert(syl.countSyllables("mayonnaise") === 3,"Count failed on test 'mayonnaise': expected 3");

assert(syl.countSyllablesAndPolys("syllabificate")[0] === 5,"AndPoly failed on test 'syllabificate': expected 5");
assert(syl.countSyllablesAndPolys("unicorn")[0] === 3,"AndPoly failed on test 'unicorn': expected 3");
assert(syl.countSyllablesAndPolys("plutonium")[0] === 4,"AndPoly failed on test 'plutonium': expected 4");
assert(syl.countSyllablesAndPolys("everything")[0] === 3,"AndPoly failed on test 'everything': expected 3");
assert(syl.countSyllablesAndPolys("haughty")[0] === 2,"AndPoly failed on test 'haughty': expected 2");
assert(syl.countSyllablesAndPolys("the")[0] === 1,"AndPoly failed on test 'the': expected 1");
assert(syl.countSyllablesAndPolys("don't")[0] === 1,"AndPoly failed on test 'don't': expected 1");
assert(syl.countSyllablesAndPolys("just")[0] === 1,"AndPoly failed on test 'just': expected 1");
assert(syl.countSyllablesAndPolys("imagination")[0] === 5,"AndPoly failed on test 'imagination': expected 5");
assert(syl.countSyllablesAndPolys("celestial")[0] === 4,"AndPoly failed on test 'celestial': expected 4");
assert(syl.countSyllablesAndPolys("ago")[0] === 2,"AndPoly failed on test 'ago': expected 2");
assert(syl.countSyllablesAndPolys("genuine")[0] === 3,"AndPoly failed on test 'genuine': expected 3");
assert(syl.countSyllablesAndPolys("colloquialism")[0] === 5,"AndPoly failed on test 'colloquialism': expected 5");
assert(syl.countSyllablesAndPolys("miserable")[0] === 4,"AndPoly failed on test 'miserable': expected 4");
assert(syl.countSyllablesAndPolys("cattle")[0] === 2,"AndPoly failed on test 'cattle': expected 2");
assert(syl.countSyllablesAndPolys("rhythm")[0] === 1,"AndPoly failed on test 'rhythm': expected 1");
assert(syl.countSyllablesAndPolys("bulkier")[0] === 3,"AndPoly failed on test 'bulkier': expected 3");
assert(syl.countSyllablesAndPolys("rattled")[0] === 2,"AndPoly failed on test 'rattled': expected 2");
assert(syl.countSyllablesAndPolys("terrible")[0] === 3,"AndPoly failed on test 'terrible': expected 3");
assert(syl.countSyllablesAndPolys("realize")[0] === 3,"AndPoly failed on test 'realize': expected 3");
assert(syl.countSyllablesAndPolys("realized")[0] === 3,"AndPoly failed on test 'realized': expected 3");
assert(syl.countSyllablesAndPolys("realizes")[0] === 4,"AndPoly failed on test 'realizes': expected 4");
assert(syl.countSyllablesAndPolys("realizing")[0] === 4,"AndPoly failed on test 'realizing': expected 4");
assert(syl.countSyllablesAndPolys("watershed")[0] === 3,"AndPoly failed on test 'watershed': expected 3");
assert(syl.countSyllablesAndPolys("famished")[0] === 2,"AndPoly failed on test 'famished': expected 2");
assert(syl.countSyllablesAndPolys("unabashedly")[0] === 5,"AndPoly failed on test 'unabashedly': expected 5");
assert(syl.countSyllablesAndPolys("zion")[0] === 2,"AndPoly failed on test 'zion': expected 2");
assert(syl.countSyllablesAndPolys("pollution")[0] === 3,"AndPoly failed on test 'pollution': expected 3");
assert(syl.countSyllablesAndPolys("weilded")[0] === 3,"AndPoly failed on test 'weilded': expected 3");
assert(syl.countSyllablesAndPolys("wsuggestiveness")[0] === 4,"AndPoly failed on test 'suggestiveness': expected 4");
assert(syl.countSyllablesAndPolys("liver")[0] === 2,"AndPoly failed on test 'liver': expected 2");
assert(syl.countSyllablesAndPolys("stereoscopic")[0] === 5,"AndPoly failed on test 'stereoscopic': expected 5");
assert(syl.countSyllablesAndPolys("mayonnaise")[0] === 3,"AndPoly failed on test 'mayonnaise': expected 3");


//Accuracy tests, passages
//1
assert(syl.countSyllables(`The Threnody bled into the Requiem. The strings of the Nightbringer rang shrilly, harshly, like my gnashing teeth. 
	I lifted my head and glared into the swirling tempests. Lightning radiated all around me, but the thunder of the unsung realm wasn't enough to drown out my shouting voice.
	`) === 72, "Count failed on passage test 1: expected 72");
assert(syl.countSyllablesAndPolys(`The Threnody bled into the Requiem. The strings of the Nightbringer rang shrilly, harshly, like my gnashing teeth. 
	I lifted my head and glared into the swirling tempests. Lightning radiated all around me, but the thunder of the unsung realm wasn't enough to drown out my shouting voice.
	`)[0] === 72, "AndPoly failed on passage test 1: expected 72");

//2
assert(syl.countSyllables(`We were somewhere around Barstow on the edge of the desert when the drugs began to take hold. I remember saying something like “I feel a bit lightheaded; maybe you should drive…” 
	And suddenly there was a terrible roar all around us and the sky was full of what looked like huge bats, all swooping and screeching and diving around the car, which was going about 
	a hundred miles an hour with the top down to Las Vegas.`) === 103, "Count Failed on passage test 2: expected 103");
assert(syl.countSyllablesAndPolys(`We were somewhere around Barstow on the edge of the desert when the drugs began to take hold. I remember saying something like “I feel a bit lightheaded; maybe you should drive…” 
	And suddenly there was a terrible roar all around us and the sky was full of what looked like huge bats, all swooping and screeching and diving around the car, which was going about 
	a hundred miles an hour with the top down to Las Vegas.`)[0] === 103, "AndPoly failed on passage test 2: expected 103");

//3
assert(syl.countSyllables(`In the not too distant future, next sunday A.D. There was a guy named Joel. Not too different from you or me!`) === 27, "Count failed on passage test 3: expected 27")
assert(syl.countSyllablesAndPolys(`In the not too distant future, next sunday A.D. There was a guy named Joel. Not too different from you or me!`)[0] === 27, "AndPoly failed on passage test 3: expected 27")

//4
assert(syl.countSyllables(`That was when she heard sirens, which at first she thought were municipal censorship to spare regular citizens from having to hear this kind of talk on community airtime, 
	but then she realized were actually on the road behind her.`) === 61, "Count failed on passage 4: expected 61")
assert(syl.countSyllablesAndPolys(`That was when she heard sirens, which at first she thought were municipal censorship to spare regular citizens from having to hear this kind of talk on community airtime, 
	but then she realized were actually on the road behind her.`)[0] === 61, "AndPoly failed on passage 4: expected 61")


console.log("All tests passed!");