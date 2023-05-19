define('NamedLibrary', ['#test_refsajifejaiojifej'], function(__WEBPACK_EXTERNAL_MODULE__test_refsajifejaiojifej__){
 return (function() {
var __webpack_modules__ = {
"./src/answer.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "answer", {
    enumerable: true,
    get: function() {
        return answer;
    }
});
const answer = 42;
},
"./src/index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _answer = __webpack_require__("./src/answer.js");
__webpack_require__("./src/main.css");
function render() {
    document.getElementById("root").innerHTML = `the answer to the universe is ${_answer.answer}`;
}
render();
},
"./src/main.css": function (module, exports, __webpack_require__) {
},
"#test_refsajifejaiojifej": function (module, exports, __webpack_require__) {
module.exports = "#test_refsajifejaiojifej";},

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
var __webpack_exports__ = __webpack_require__('./src/index.js');return __webpack_exports__;

})()

});
//# sourceMappingURL=main.js.map