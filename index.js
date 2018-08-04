exports.countSyllables = function (inString) {
    let syllablesTotal = 0;
    let wordList = inString.match(/(?:(?:\w-\w)|[\wÀ-ÿ'’])+/g);
    if (wordList) {wordList.forEach((word) => {
        if (word === "'"||word==="’") {return;} //bandaid solution.
        if (word.length <= 2) {syllablesTotal += 1; return;} //quick return on short words
        let syllables = 0;
        if (word.endsWith("s'")||word.endsWith("s’")) {word.slice(-1);} //ending with s'
        if (word.endsWith("s's")||word.endsWith("s’s")) {word.slice(-1,-3);} //ending with s's
        const esylp = word.match(/ie($|l|t|rg)|nuine|cle$|ble$|ttle$|ywed$|phe$|ucle[aeiuy]|kle(s|$)|[^n]scien|sue|aybe$|[^aeiou]shed|[^lso]les$|^\weville|[^e]rge$|gged$|deville|sche$|seer|^pre[ieuy]|(pre|post)med$|^re[eiuy]/gmi);
        if (esylp) {syllables += esylp.length;} //E clustered positive
        const esylm = word.match(/every|some([^aeiouy]|$)|[^tr]ere(?!d|$|o|r|t|a[^v]|n|s|x)|[^g]eous|(^d|p|l|j)ea|ea([uktsv]|ch|r(?!r)|g(?!e))|niet/gmi);
        if (esylm) {syllables -= esylm.length;} //E clustered negative
        const isylp = word.match(/rie[^sndfvtl]|(^|[^tcs])ia|siai|[^ct]ious|[aeiou]ism(s$|$)|quie|[lk]ier|settli|stia|aying|[^cn]ien[^d]|[aeioy]ing$|dei[tf]|ible/gmi);
        if (isylp) {syllables += isylp.length;} //I clustered positive
        const osylp = word.match(/nyo|osm(s$|$)|oinc|ored(?!$)|(^|[^ts])io|oale|[aeiou]yoe|^m[ia]cro([aiouy]|e)|roev|ouel|^proa/gmi);
        if (osylp) {syllables += osylp.length;} //O clustered positive
        const osylm = word.match(/[^f]ore(?!$|v|c|d$|a|tte|o)|fore|orbed/gmi);
        if (osylm) {syllables -= osylm.length;} //O clustered negative
        const asylp = word.match(/asm(s$|$)|ausea|oa$|anti[aeiou]|raor|intra[ou]|iae|ahe$/gmi);
        if (asylp) {syllables += asylp.length;} //A clustered positive
        const asylm = word.match(/aste(?!$|ful|s$|r)/gmi);
        if (asylm) {syllables -= asylm.length;} //A clustered negative
        const usylp = word.match(/uo[^y]|[^gq]ua(?!r)|uen|[^g]iu|uille|nouet|uis([^aeiou]|$)|ouett|euing/gmi);
        if (usylp) {syllables += usylp.length;} //U clustered positive
        const usylm = word.match(/geous|busi|logu(?!e|i)/gmi);
        if (usylm) {syllables -= usylm.length;} //U clustered negative
        const ysylp = word.match(/[ibcmrluhp]ya|nyac|[^e]yo|[aiou]y[aiou]|[aoruhm]ye(tt|l|n|v|z)|pye|dy[ae]|oye[ex]|lye[nlrs]|olye|aye(k|r|$|u[xr]|da)|iye/gmi);
        if (ysylp) {syllables += ysylp.length;} //Y clustered positive
        const ysylm = word.match(/arley|key/gmi);
        if (ysylm) {syllables -= ysylm.length;}
        const essuffix = word.match(/(((?!c[hrl]|sh|\w[iszxgej]|[niauery]c|tl|do).{2}|^.{0,1})es($|ville$))/gmi);
        if (essuffix) {syllables--;}//es suffix
        const edsuffix = word.match(/([aeiouy][^aeiouyrdt]|[^aeiouy][^laeiouyrdtb]|ll|bb|ield)ed$|[^cbda]red$/gmi);
        if (edsuffix) {syllables--}
        const csylp = word.match(/chn|mc|thm/gmi);
        if (csylp) {syllables += csylp.length;} //Consonant clustered negative
        const eEndings = word.match(/[^e]e(side|\wess|ly|ment|ship|board|ground|ville|port|ful(ly)?|berry|box|nesse?|such|man|woman|horse|anne)s?$/gmi);
        if (eEndings) {syllables--}
        const eVowels = word.match(/[aiouy](?![aeiouy])|ee|e(?!$|-|[iu])/gmi);
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