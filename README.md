# fast-syllablize

Break a word into syllables

# Usage

```js
const { syllablize } = require("fast-syllablize");

let word = "supercalifragilisticexpialidocious";
console.log(syllablize(word));

/*
Expected output:
[
  'su',  'per',   'ca',
  'lif', 'ra',    'gi',
  'lis', 'ti',    'cex',
  'pi',  'a',     'li',
  'do',  'cious'
]
*/
```
