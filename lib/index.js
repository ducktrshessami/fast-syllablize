module.exports = syllablize;

function syllablize(word) {
    return foo(word);
}

// Based on https://stackoverflow.com/a/51175267
function foo(word) {
    const results = [];
    let formatted = word.trim().toLocaleLowerCase("en").replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
    let split = splitWord(formatted).reverse();
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

function splitWord(original) {
    let syl = original.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '')
        .replace(/^y/, '')
        .match(/[aeiouy]{1,2}/g);
    return syl ? syl : [original];
}
