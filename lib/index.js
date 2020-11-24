// Based on https://stackoverflow.com/a/51175267/14184670
function splitWord(original) {
    let word = original.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    var syl = word.match(/[aeiouy]{1,2}/g);
    return syl ? syl : [ original ];
}

function syllablize(word) {
    let split, results = [];
    formatted = word.trim().toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
    split = splitWord(formatted).reverse();
    while (formatted && split.length) {
        let index = formatted.indexOf(split[split.length - 1]) + split[split.length - 1].length;
        results.push(formatted.slice(0, index))
        formatted = formatted.slice(index);
        split.pop();
    }
    if (formatted) {
        results[results.length - 1] += formatted;
    }
    return results;
}

module.exports = syllablize;
