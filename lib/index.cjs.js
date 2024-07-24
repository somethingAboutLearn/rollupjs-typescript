'use strict';

var a = 'A';
var get$1 = function () {
    return a;
};

var a$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    a: a,
    get: get$1
});

var b = 'B';
var get = function () {
    return b;
};

var b$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    b: b,
    get: get
});

exports.a = a$1;
exports.b = b$1;
