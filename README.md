# Syllabificate [![Build Status](https://travis-ci.com/EndaHallahan/syllabificate.svg?branch=master)](https://travis-ci.com/EndaHallahan/syllabificate)

Syllable counts and polysyllable counts in Javascript. Try the demo [here!](https://endahallahan.github.io/syllabificate/syllabificateTester.html)

Syllable counts are an important part of calculating many readability metrics, such as the Flesch-Kincaid score and the SMOG grade. Syllabificate was created to facilitate faster and more accurate measurements for these calculations. 

*Note: Syllabificate is an English language syllable counter. It may not be accurate in other languages.*

## Installation (Node)
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
### countPolys(*string*)
Returns the total number of polysyllables (words with 3 or more syllables) in a string.
```javascript
syl.countPolys("Electric slide."); //1
```
### countSyllablesAndPolys(*string*)
Returns both the total number of syllables and the total number of polysyllables as an array: `[syllables, polysyllables]`. This can be useful if you are calculating multiple metrics.
```javascript
syl.countSyllablesAndPolys("Electric slide."); //[4, 1]
```

