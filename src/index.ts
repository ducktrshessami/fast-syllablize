function formatWord(word: string): string {
    return word.replace(/[^a-z]/gi, "");
}

export function syllablize(word: string): Array<string> {
    const formatted = formatWord(word);
    return formatted[formatted.length - 1] === "e" || !/[aeiouy]/i.test(formatted) ? A(formatted) : B(formatted);
}

function splitWord(original: string): Array<string> {
    const syl = original.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/i, "")
        .replace(/^y/i, "")
        .match(/[aeiouy]{1,2}/gi);
    return syl ? syl : [original];
}

// Based on https://stackoverflow.com/a/51175267
function A(word: string): Array<string> {
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

export function methodA(word: string): Array<string> {
    return A(formatWord(word));
}

// Based on https://stackoverflow.com/a/49407494
function B(word: string): Array<string> {
    return word.match(/[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi) || (word ? [word] : []);
}

export function methodB(word: string): Array<string> {
    return B(formatWord(word));
}

function C(word: string): Array<string> {
    const res = word.match(/(?:(?<![aeiouy])[bcdfghjklmnpqrstvwxyz]{2,}|[bcdfghjklmnpqrstvwxyz])?(?:[aeiouy]{2,}(?![bcdfghjklmnpqrstvwxyz][aeiouy])|a[iu]|e[aeiu]|ie|o[aou]|[aeiouy])?(?:[bcdfghjklmnpqrstvwxyz](?![aeiouy]))*/gi) || [];
    return res.filter(syl => syl);
}

export function methodC(word: string): Array<string> {
    return C(formatWord(word));
}
