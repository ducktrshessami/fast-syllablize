export function syllablize(word: string): Array<string> {
    const formatted = word
        .trim()
        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
    return formatted[formatted.length - 1] === "e" || !/[aeiouy]/i.test(formatted) ? methodA(formatted) : methodB(formatted);
}

// Based on https://stackoverflow.com/a/51175267
export function methodA(word: string): Array<string> {
    const results = [];
    const split = splitWord(word).reverse();
    while (word && split.length) {
        let index = word.indexOf(split[split.length - 1]) + split[split.length - 1].length;
        results.push(word.slice(0, index))
        word = word.slice(index);
        split.pop();
    }
    if (word) {
        results[results.length - 1] += word;
    }
    return results;
}

function splitWord(original: string): Array<string> {
    const syl = original.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/i, "")
        .replace(/^y/i, "")
        .match(/[aeiouy]{1,2}/gi);
    return syl ? syl : [original];
}

// Based on https://stackoverflow.com/a/49407494
export function methodB(word: string): Array<string> {
    return word.match(/[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi) || (word ? [word] : []);
}
