Syllable counts and polysyllable counts in Javascript. Try the demo [here.](https://endahallahan.github.io/syllabificate/syllabificateTester.html)

## Installation
```npm install syllabificate```
## Usage
```javacript
const syl = require('syllabificate');
```
### countSyllables(*string*)
Returns the total number of syllables in a string.
```javascript
syl.countSyllables("Electric slide."); //4
```
### countSyllablesAndPolys(*string*)
Counts the total number of syllables and polysyllables in a string. Returns an array: `[syllables, polysyllables]`
```javascript
syl.countSyllablesAndPolys("Electric slide."); //[4, 1]
```

