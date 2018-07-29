exports.countSyllables = function (inString) {
    let syllablesTotal = 0;
    let wordList = inString.match(/(?:(?:\w-\w)|[\wÀ-ÿ'’])+/g);
    if (wordList) {wordList.forEach((word) => {
        if (word === "'"||word==="’") {return;} //bandaid solution.
        if (word.length <= 2) {syllablesTotal += 1; return;} //quick return on short words
        let syllables = 0;
        if (word.endsWith("s'")||word.endsWith("s’")) {word.slice(-1);} //ending with s'
        if (word.endsWith("s's")||word.endsWith("s’s")) {word.slice(-1,-3);} //ending with s's
        const esylp = word.match(/ie$|nuine|cle$|able$|ttle$|ywed$|phe$|ucle[aeiouy]|kle(s|$)|[^n]scien|sue|aybe$|[^aeiou]shed|[^lso]les$|^\weville|ierg|iet/gmi);
        if (esylp) {syllables += esylp.length;} //E clustered positive
        const esylm = word.match(/every|some([^aeiouy]|$)|[^t]ere(?!d|$|o|r|t|a[^v]|n)|[^g]eous|(^d|p|l)ea|ea[urkts]/gmi);
        if (esylm) {syllables -= esylm.length;} //E clustered negative
        const isylp = word.match(/rie[^sndf]|[^tcs]ia|siai|[^ct]ious|[aeiou]ism(s$|$)|quie|lier|settli|stia|aying|kier|[^cn]ien[^d]|[aeioy]ing$|[^q]uing$|ithm|dei[tf]|ium|ible|eil|ifle|iel/gmi);
        if (isylp) {syllables += isylp.length;} //I clustered positive
        const osylp = word.match(/nyo|osm(s$|$)|oinc|ored(?!$)|[^t]io|oale|[aeiou]yoe/gmi);
        if (osylp) {syllables += osylp.length;} //O clustered positive
        const osylm = word.match(/[^f]ore(?!$|v|c|d$|a|tte|o)|fore/gmi);
        if (osylm) {syllables -= osylm.length;} //O clustered negative
        const asylp = word.match(/asm(s$|$)|ausea|oa$|anti[aeiou]|raor/gmi);
        if (asylp) {syllables += asylp.length;} //A clustered positive
        const asylm = word.match(/aste(?!$|ful)|ates/gmi);
        if (asylm) {syllables -= asylm.length;} //A clustered negative
        const usylp = word.match(/uo[^y]|[^g]ua(?!r)|uen|ius/gmi);
        if (usylp) {syllables += usylp.length;} //U clustered positive
        const usylm = word.match(/quain|geous|busi|logu[^e]/gmi);
        if (usylm) {syllables -= usylm.length;} //U clustered negative
        const ysylp = word.match(/[ibcmrlu]ya|[^e]yo|[aiou]y[aiou]|[aor]ye(tt|l|n|v|z)|dy[ae]|oyee/gmi);
        if (ysylp) {syllables += ysylp.length;} //Y clustered positive
        const esuffix = word.match(/(((?!c[hrl]|sh|\w[iszxgej]|bl|[niauer]c).{2}|^.{0,1})es$)|([aeiouy][^aeiouyrdt]|[^aeiouy][^laeiouyrdtb]|[aeiouy][^aeiouy][^laeiouyrdtb]|ll|bb|ield)ed$|[^cd]red$/gmi);
        if (esuffix) {syllables -= esuffix.length;}//es and ed suffixes
        const csylp = word.match(/chn/gmi);
        if (csylp) {syllables += csylp.length;} //Consonant clustered negative
        const eVowels = word.match(/[aiouy](?![aeiouy])|ee|e(?!$|-|[eiu]|(side|\wess|ly|ment|ship|board|ground|ville|port|ful)s?$)/gmi);
        if (eVowels) {syllables += eVowels.length;} //Applicable vowel count (all but e at end of word)
        if (syllables <= 0) {syllables = 1;} //catch-all
        if (word.match(/[^aeiou]n['’]t$/i)) {syllables ++;} //ending in n't, but not en't
        if (word.match(/en['’]t$/i)) {syllables --;} //ending in en't
        syllablesTotal += syllables;
    });}
    return syllablesTotal;
};

exports.countSyllablesAndPolys = function (inString) {
    let syllablesTotal = 0, polysTotal = 0;
    let wordList = inString.match(/(?:(?:\w-\w)|[\wÀ-ÿ'’])+/g);
    if (wordList) {wordList.forEach((word) => {
        if (word === "'"||word==="’") {return;} //bandaid solution.
        if (word.length <= 2) {syllablesTotal += 1; return;} //quick return on short words
        let syllables = 0;
        if (word.endsWith("s'")||word.endsWith("s’")) {word.slice(-1);} //ending with s'
        if (word.endsWith("s's")||word.endsWith("s’s")) {word.slice(-1,-3);} //ending with s's
        const esylp = word.match(/rea([^l])\1|ie$|nuine|cle$|able$|ttle$|(?!(^))dea|ywed$|phe$|ucle[aeiouy]|kle(s|$)|inges|scien|sue|aybe$|[^aeiou]shed/gmi);
        if (esylp) {syllables += esylp.length;} //E clustered positive
        const esylm = word.match(/every|some([^aeiouy]|$)|ere(?!d|$|o)|(((?!c[hrl]|sh|\w[iszx]|ag|bl|\wg).{2}|^.{0,1})es$)|([aeiouy][^aeiouyrdt]|[^aeiouy][^laeiouyrdt]|[aeiouy][^aeiouy][^aeiouyrdt]|ll)ed$|[^cd]red$/gmi);
        if (esylm) {syllables -= esylm.length;} //E clustered negative
        const isylp = word.match(/rie[^snd]|[^tc]ia|[^ct]ious|[aeiou]ism(s$|$)|quie|lier|ttli|stia|aying|kier|rien[^d]|[aeioyu]ing|ithm|dei[tf]|ium|ible|eil|ifle/gmi);
        if (isylp) {syllables += isylp.length;} //I clustered positive
        const osylp = word.match(/nyo|osm(s$|$)|oinc|ored(?!$)|[^t]ion/gmi);
        if (osylp) {syllables += osylp.length;} //O clustered positive
        const osylm = word.match(/ore(?!($|v|c|d$))/gmi);
        if (osylm) {syllables -= osylm.length;} //O clustered negative
        const asylp = word.match(/asm(s$|$)|ausea|eal[^m]|ayo/gmi);
        if (asylp) {syllables += asylp.length;} //A clustered positive
        const asylm = word.match(/aste(?!$)/gmi);
        if (asylm) {syllables -= asylm.length;} //A clustered negative
        const usylp = word.match(/uo|[^g]ua[^r]/gmi);
        if (usylp) {syllables += usylp.length;} //U clustered positive
        const eVowels = word.match(/[aiouy](?![aeiouy])|e(?!$|-|[aeiuy]|(side|ness|ly|ment)s?$)/gmi);
        if (eVowels) {syllables += eVowels.length;} //Applicable vowel count (all but e at end of word)
        if (syllables <= 0) {syllables = 1;} //catch-all
        if (word.match(/[^aeiou]n['’]t$/i)) {syllables ++;} //ending in n't, but not en't
        if (word.match(/en['’]t$/i)) {syllables --;} //ending in en't
        if (syllables >= 3) {polysTotal++;}
        syllablesTotal += syllables;
    });}
    return [syllablesTotal, polysTotal];
};

exports.countPolys = function (inString) {
    let polysTotal = 0;
    let wordList = inString.match(/(?:(?:\w-\w)|[\wÀ-ÿ'’])+/g);
    if (wordList) {wordList.forEach((word) => {
        if (word === "'"||word==="’") {return;} //bandaid solution.
        if (word.length <= 3) {return;} //quick return on short words
        let syllables = 0;
        if (word.endsWith("s'")||word.endsWith("s’")) {word.slice(-1);} //ending with s'
        if (word.endsWith("s's")||word.endsWith("s’s")) {word.slice(-1,-3);} //ending with s's
        const esylp = word.match(/rea([^l])\1|ie$|nuine|cle$|able$|ttle$|(?!(^))dea|ywed$|phe$|ucle[aeiouy]|kle(s|$)|inges|scien|sue|aybe$|[^aeiou]shed/gmi);
        if (esylp) {syllables += esylp.length;} //E clustered positive
        const esylm = word.match(/every|some([^aeiouy]|$)|ere(?!d|$|o)|(((?!c[hrl]|sh|\w[iszx]|ag|bl|\wg).{2}|^.{0,1})es$)|([aeiouy][^aeiouyrdt]|[^aeiouy][^laeiouyrdt]|[aeiouy][^aeiouy][^aeiouyrdt]|ll)ed$|[^cd]red$/gmi);
        if (esylm) {syllables -= esylm.length;} //E clustered negative
        const isylp = word.match(/rie[^snd]|[^tc]ia|[^ct]ious|[aeiou]ism(s$|$)|quie|lier|ttli|stia|aying|kier|rien[^d]|[aeioyu]ing|ithm|dei[tf]|ium|ible|eil|ifle/gmi);
        if (isylp) {syllables += isylp.length;} //I clustered positive
        const osylp = word.match(/nyo|osm(s$|$)|oinc|ored(?!$)|[^t]ion/gmi);
        if (osylp) {syllables += osylp.length;} //O clustered positive
        const osylm = word.match(/ore(?!($|v|c|d$))/gmi);
        if (osylm) {syllables -= osylm.length;} //O clustered negative
        const asylp = word.match(/asm(s$|$)|ausea|eal[^m]/gmi);
        if (asylp) {syllables += asylp.length;} //A clustered positive
        const asylm = word.match(/aste(?!$)/gmi);
        if (asylm) {syllables -= asylm.length;} //A clustered negative
        const usylp = word.match(/uo|[^g]ua[^r]/gmi);
        if (usylp) {syllables += usylp.length;} //U clustered positive
        const eVowels = word.match(/[aiouy](?![aeiouy])|e(?!$|-|[aeiuy]|side$|ness$|ly$)|[aeiou]y[aeiou]/gmi);
        if (eVowels) {syllables += eVowels.length;} //Applicable vowel count (all but e at end of word)
        if (syllables <= 0) {syllables = 1;} //catch-all
        if (word.match(/[^aeiou]n['’]t$/i)) {syllables ++;} //ending in n't, but not en't
        if (word.match(/en['’]t$/i)) {syllables --;} //ending in en't
        if (syllables >= 3) {polysTotal++;}
    });}
    return polysTotal;
};