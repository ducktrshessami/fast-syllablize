function n(t){return t.replace(/[^a-z]/gi,"")}function g(t){let e=n(t);return e[e.length-1]==="e"||!/[aeiouy]/i.test(e)?s(e):u(e)}function a(t){let e=t.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/i,"").replace(/^y/i,"").match(/[aeiouy]{1,2}/gi);return e||[t]}function s(t){let e=[],r=a(t).reverse();for(;t&&r.length;){let i=t.indexOf(r[r.length-1])+r[r.length-1].length;e.push(t.slice(0,i)),t=t.slice(i),r.pop()}return t&&(e[e.length-1]+=t),e}function y(t){return s(n(t))}function u(t){return(t.match(new RegExp("(?:(?<![aeiouy])[bcdfghjklmnpqrstvwxyz]{2,}|[bcdfghjklmnpqrstvwxyz])?(?:[aeiouy]{2,}(?![bcdfghjklmnpqrstvwxyz][aeiouy])|a[iu]|e[aeiu]|ie|o[aou]|[aeiouy])?(?:[bcdfghjklmnpqrstvwxyz](?![aeiouy]))*","gi"))||[]).filter(r=>r)}function c(t){return u(n(t))}function o(t){return t.match(/[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi)||(t?[t]:[])}function l(t){return o(n(t))}export{y as methodA,c as methodB,l as methodC,g as syllablize};
