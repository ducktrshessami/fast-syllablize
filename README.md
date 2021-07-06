# syllablize

Break a word into syllables in Node.js

Mainly for personal use

Based on code from Stack Overflow:
- https://stackoverflow.com/a/51175267
- https://stackoverflow.com/a/49407494

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
  'su',    'per', 'ca',
  'lif',   'ra',  'gi',
  'lis',   'ti',  'cex',
  'pia',   'li',  'do',
  'cious'
]
*/
```
