exports.countSyllables = function (inString) {
    let syllablesTotal = 0;
    let wordList = inString.match(/(?:(?:\w-\w)|[\wÀ-ÿ'’])+/g);
    if (wordList) {wordList.forEach((word) => {
        if (word === "'"||word==="’") {return;} //bandaid solution.
        if (word.length <= 2) {syllablesTotal += 1; return;} //quick return on short words
        let syllables = 0;
        if (word.endsWith("s'")||word.endsWith("s’")) {word.slice(-1)} //ending with s'
        if (word.endsWith("s's")||word.endsWith("s’s")) {word.slice(-1,-3)} //ending with s's
        const isylp = word.match(/rie[^snd]|[^t]ia|[^ct]ious|ism(s$|$)|quie|lier|ttli|stia|aying|kier|rien[^d]|[aeioyu]ing|ithm|dei[tf]|ium/gmi);
        if (isylp) {syllables += isylp.length;} //I clustered positive
        const esylp = word.match(/rea([^l])\1|eor|ie$|peo|nuine|cle$|able$|ttle$|(?!(^))dea|ywed$|phe$|ucle[aeiouy]|kle(s|$)|inges|scien|sue$/gmi);
        if (esylp) {syllables += esylp.length;} //E clustered positive
        const esylm = word.match(/ely|every|some([^aeiouy]|$)|ere(?!d|$)|(((?!c[hrl]|sh|\w[iszx]|ag|bl).{2}|^.{0,1})es$)|([aeiouy][^aeiouyrdt]|[^aeiouy][^laeiouyrdt]|[aeiouy][^aeiouy][^aeiouyrdt]|ll)ed$|[^c]red$/gmi);
        if (esylm) {syllables -= esylm.length;} //E clustered negative
        const osylp = word.match(/nyo|osm(s$|$)|oinc|ored(?!$)/gmi);
        if (osylp) {syllables += osylp.length;} //O clustered positive
        const osylm = word.match(/ore(?!($|v|c|d$))/gmi);
        if (osylm) {syllables -= osylm.length;} //O clustered negative
        const usylp = word.match(/uo|[^g]ua[^r]/gmi);
        if (usylp) {syllables += usylp.length;} //U clustered positive
        const asylp = word.match(/asm(s$|$)|ausea/gmi);
        if (asylp) {syllables += asylp.length;} //A clustered positive
        const ysylp = word.match(/ythm$/gmi);
        if (ysylp) {syllables += ysylp.length;} //Y clustered positive
        const eVowels = word.match(/[aiouy](?![aeiouy])|e(?!$|-|[aeiouy]| )/gmi);
        if (eVowels) {syllables += eVowels.length;} //Applicable vowel count (all but e at end of word)
        if (syllables <= 0) {syllables = 1} //catch-all
        if (word.match(/[^aeiou]n['’]t$/i)) {syllables ++;} //ending in n't, but not en't
        if (word.match(/en['’]t$/i)) {syllables --;} //ending in en't
        syllablesTotal += syllables;
    });}
    return syllablesTotal;
}

exports.countSyllablesAndPolys = function (inString) {
    let syllablesTotal = 0, polysTotal = 0;
    let wordList = inString.match(/(?:(?:\w-\w)|[\wÀ-ÿ'’])+/g);
    if (wordList) {wordList.forEach((word) => {
        if (word === "'"||word==="’") {return;} //bandaid solution.
        if (word.length <= 2) {syllablesTotal += 1; return;} //quick return on short words
        let syllables = 0;
        if (word.endsWith("s'")||word.endsWith("s’")) {word.slice(-1)} //ending with s'
        if (word.endsWith("s's")||word.endsWith("s’s")) {word.slice(-1,-3)} //ending with s's
        const isylp = word.match(/rie[^snd]|[^t]ia|[^ct]ious|ism(s$|$)|quie|lier|ttli|stia|aying|kier|rien[^d]|[aeioyu]ing|ithm|dei[tf]|ium/gmi);
        if (isylp) {syllables += isylp.length;} //I clustered positive
        const esylp = word.match(/rea([^l])\1|eor|ie$|peo|nuine|cle$|able$|ttle$|(?!(^))dea|ywed$|phe$|ucle[aeiouy]|kle(s|$)|inges|scien|sue$/gmi);
        if (esylp) {syllables += esylp.length;} //E clustered positive
        const esylm = word.match(/ely|every|some([^aeiouy]|$)|ere(?!d|$)|(((?!c[hrl]|sh|\w[iszx]|ag|bl).{2}|^.{0,1})es$)|([aeiouy][^aeiouyrdt]|[^aeiouy][^laeiouyrdt]|[aeiouy][^aeiouy][^aeiouyrdt]|ll)ed$|[^c]red$/gmi);
        if (esylm) {syllables -= esylm.length;} //E clustered negative
        const osylp = word.match(/nyo|osm(s$|$)|oinc|ored(?!$)/gmi);
        if (osylp) {syllables += osylp.length;} //O clustered positive
        const osylm = word.match(/ore(?!($|v|c|d$))/gmi);
        if (osylm) {syllables -= osylm.length;} //O clustered negative
        const usylp = word.match(/uo|[^g]ua[^r]/gmi);
        if (usylp) {syllables += usylp.length;} //U clustered positive
        const asylp = word.match(/asm(s$|$)|ausea/gmi);
        if (asylp) {syllables += asylp.length;} //A clustered positive
        const ysylp = word.match(/ythm$/gmi);
        if (ysylp) {syllables += ysylp.length;} //Y clustered positive
        const eVowels = word.match(/[aiouy](?![aeiouy])|e(?!$|-|[aeiouy]| )/gmi);
        if (eVowels) {syllables += eVowels.length;} //Applicable vowel count (all but e at end of word)
        if (syllables <= 0) {syllables = 1} //catch-all
        if (word.match(/[^aeiou]n['’]t$/i)) {syllables ++;} //ending in n't, but not en't
        if (word.match(/en['’]t$/i)) {syllables --;} //ending in en't
        if (syllables >= 3) {polysTotal++;}
        syllablesTotal += syllables;
    });}
    return [syllablesTotal, polysTotal];
}