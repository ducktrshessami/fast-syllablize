function i(r){return r.replace(/[^a-z]/gi,"")}function a(r){let t=i(r);return t[t.length-1]==="e"||!/[aeiouy]/i.test(t)?n(t):o(t)}function n(r){return(r.match(/(?:[^aeiouy]+|y^)?[aeiouy]{1,2}(?:(?:(?:[^aeiouy]*(?:[^laeiouy]e?|ed))|[^aeiouy]+)$)?/gi)||[]).filter(e=>e)}function s(r){return n(i(r))}function o(r){return(r.match(new RegExp("(?:(?<![aeiouy])[bcdfghjklmnpqrstvwxyz]{2,}|[bcdfghjklmnpqrstvwxyz])?(?:[aeiouy]{2,}(?![bcdfghjklmnpqrstvwxyz][aeiouy])|a[iu]|e[aeiu]|ie|o[aou]|[aeiouy])?(?:[bcdfghjklmnpqrstvwxyz](?![aeiouy]))*","gi"))||[]).filter(e=>e)}function y(r){return o(i(r))}function u(r){return r.match(/[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi)||(r?[r]:[])}function g(r){return u(i(r))}export{s as methodA,y as methodB,g as methodC,a as syllablize};
//# sourceMappingURL=index.mjs.map