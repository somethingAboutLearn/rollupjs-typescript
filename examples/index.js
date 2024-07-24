const { a, b } = require('../lib/index.cjs.js');

async function fun() {
  console.log('res=>', a, b);
}

fun();

// 终端执行
// node examples/index.js
