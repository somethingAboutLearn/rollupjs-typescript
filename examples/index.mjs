import { a, b } from '../lib/index.cjs.js';

async function fun() {
  console.log('res=>', a, b);
}

fun();

// 终端执行
// node examples/index.mjs
