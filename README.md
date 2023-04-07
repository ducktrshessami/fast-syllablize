# fast-syllablize

Break a word into syllables

# Usage

```js
// const { syllablize } = require("syllablize");
import { syllablize } from "fast-syllablize";

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
