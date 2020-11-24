# syllablize

Break a word into syllables in Node.js

Based on [code from Stack Overflow](https://stackoverflow.com/a/51175267/14184670)

Mainly for personal use

# Installation

After installing [Node.js](https://nodejs.org/), run the following command in your package directory:

```
npm install github:ducktrshessami/syllablize
```

# Usage

```js
const syllablize = require("syllablize");

let word = "supercalifragilisticexpialidocious";
console.log(syllablize(word));

/*
Expected output:
[
  'su',   'pe',  'rca',
  'li',   'fra', 'gi',
  'li',   'sti', 'ce',
  'xpia', 'li',  'do',
  'cio',  'us'
]
*/
```
