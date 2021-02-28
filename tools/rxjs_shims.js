/* eslint-disable prettier/prettier */

// rxjs/operators
(function (factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    const v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define('rxjs/operators', ['exports', 'rxjs'], factory);
  }
})((exports, rxjs) => {
  'use strict';
  Object.keys(rxjs.operators).forEach((key) => {
    exports[key] = rxjs.operators[key];
  });
  Object.defineProperty(exports, '__esModule', {value: true});
});
  
// rxjs/testing
(function (factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    const v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define('rxjs/testing', ['exports', 'rxjs'], factory);
  }
})((exports, rxjs) => {
  'use strict';
  Object.keys(rxjs.testing).forEach((key) => {
    exports[key] = rxjs.testing[key];
  });
  Object.defineProperty(exports, '__esModule', {value: true});
});