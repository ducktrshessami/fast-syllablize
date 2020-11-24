/*
Separate module to declare code from Stack Overflow
https://stackoverflow.com/a/51175267/14184670

var count = function(word)
{
    word = word.toLowerCase();
    word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    //return word.match(/[aeiouy]{1,2}/g).length;
    var syl = word.match(/[aeiouy]{1,2}/g);
    console.log(syl);
    if(syl)
    {
        //console.log(syl);
        return syl.length;
    }
}
*/

function splitWord(word) {
    word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    var syl = word.match(/[aeiouy]{1,2}/g);
    return syl ? syl : [];
}

function syllablize(word) {
    let split, results = [];
    formatted = word.trim().toLowerCase();
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
