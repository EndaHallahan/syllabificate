# Syllabificate [![Build Status](https://travis-ci.com/EndaHallahan/syllabificate.svg?branch=master)](https://travis-ci.com/EndaHallahan/syllabificate)

Syllable counts and polysyllable counts in Javascript. Try the demo [here!](https://endahallahan.github.io/syllabificate/syllabificateTester.html)

Syllable counts are an important part of calculating many readability metrics, such as the Flesch-Kincaid score and the SMOG grade. Syllabificate was created to facilitate faster and more accurate measurements for these calculations. 

*Note: Syllabificate is an English language syllable counter. It may not be accurate in other languages.*

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

