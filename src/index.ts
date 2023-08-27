function formatWord(word: string): string {
    return word.replace(/[^a-z]/gi, "");
}

export function syllablize(word: string): Array<string> {
    const formatted = formatWord(word);
    return formatted[formatted.length - 1] === "e" || !/[aeiouy]/i.test(formatted) ? A(formatted) : B(formatted);
}

// Based on https://stackoverflow.com/a/51175267
function A(word: string): Array<string> {
    const res = word.match(/(?:[^aeiouy]+|y^)?[aeiouy]{1,2}(?:(?:(?:[^aeiouy]*(?:[^laeiouy]e?|ed))|[^aeiouy]+)$)?/gi) || [];
    return res.filter(syl => syl);
}

export function methodA(word: string): Array<string> {
    return A(formatWord(word));
}

function B(word: string): Array<string> {
    const res = word.match(/(?:(?<![aeiouy])[bcdfghjklmnpqrstvwxyz]{2,}|[bcdfghjklmnpqrstvwxyz])?(?:[aeiouy]{2,}(?![bcdfghjklmnpqrstvwxyz][aeiouy])|a[iu]|e[aeiu]|ie|o[aou]|[aeiouy])?(?:[bcdfghjklmnpqrstvwxyz](?![aeiouy]))*/gi) || [];
    return res.filter(syl => syl);
}

export function methodB(word: string): Array<string> {
    return B(formatWord(word));
}

// Based on https://stackoverflow.com/a/49407494
function C(word: string): Array<string> {
    return word.match(/[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi) || (word ? [word] : []);
}

export function methodC(word: string): Array<string> {
    return C(formatWord(word));
}
