(()=>{var o={902:o=>{o.exports=()=>{console.log("hello from moduleA!")}},78:o=>{o.exports={hello:"from modeleB"}}},e={};function r(l){var t=e[l];if(void 0!==t)return t.exports;var s=e[l]={exports:{}};return o[l](s,s.exports,r),s.exports}(()=>{const o=r(902),e=r(78);o(),console.log(e);const l=fs.readFileSync("./kadai-09/sample/hello.text").toString("utf-8");console.log(l)})()})();