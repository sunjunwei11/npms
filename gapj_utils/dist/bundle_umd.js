(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.umd_ok = {}));
})(this, (function (exports) { 'use strict';

    const min = (...nums) => {
        return Math.min(...nums);
    };

    const minNum$1 = min(11, 13, 16);

    const word = minNum$1 + 'hello';

    const word2 = minNum$1 + 'hello2';

    const minNum = min(2, 3, 4);

    const add = (...nums) => {
        return nums.reduce((a, b) => a + b, 0);
    };

    console.log(word + word2 + add(1, 2, 3) + minNum);

    exports.add = add;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
