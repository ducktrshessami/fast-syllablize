"use strict";var u=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var l=(r,t)=>{for(var n in t)u(r,n,{get:t[n],enumerable:!0})},m=(r,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of c(t))!f.call(r,i)&&i!==n&&u(r,i,{get:()=>t[i],enumerable:!(a=s(t,i))||a.enumerable});return r};var h=r=>m(u({},"__esModule",{value:!0}),r);var z={};l(z,{methodA:()=>A,methodB:()=>x,methodC:()=>b,syllablize:()=>p});module.exports=h(z);function e(r){return r.replace(/[^a-z]/gi,"")}function p(r){let t=e(r);return t[t.length-1]==="e"||!/[aeiouy]/i.test(t)?y(t):g(t)}function o(r,t){return r.match(t)||(r?[r]:[])}function y(r){return o(r,/(?:[^aeiouy]+|y^)?[aeiouy]{1,2}(?:(?:(?:[^aeiouy]*(?:[^laeiouy]e?|ed))|[^aeiouy]+)$)?/gi)}function A(r){return y(e(r))}function g(r){return o(r,new RegExp("(?:(?<![aeiouy])[bcdfghjklmnpqrstvwxyz]{2,}|[bcdfghjklmnpqrstvwxyz])?(?:[aeiouy]{2,}(?![bcdfghjklmnpqrstvwxyz][aeiouy])|a[iu]|e[aeiu]|ie|o[aou]|[aeiouy])?(?:[bcdfghjklmnpqrstvwxyz](?![aeiouy]))*","gi")).filter(t=>t)}function x(r){return g(e(r))}function d(r){return o(r,/[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi)}function b(r){return d(e(r))}0&&(module.exports={methodA,methodB,methodC,syllablize});
//# sourceMappingURL=index.js.map