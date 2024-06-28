const log = console.log;
/**
 * 함수를 받아서 함수를 return
 * 인자가 2개 이상이면 받아둔 함수를 즉시 실행하고 적다면 return한 이후에 인자를 합쳐서 실행
 *
 * 1. curry는 f라는 함수를 인자로 받아 새로운 함수를 반환하는 화살표 함수
 * 2. 첫번째 반환 함수: (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
 * 3. 인자 검사 및 호춣
 *  3-1. _.length가 참이면 f(a, ..._)를 호출해 즉시 결과를 반환
 *  3-2. 거짓이면 다시 curry(f)를 호출해 나머지 인자를 받아 f(a, ..._)를 호출
 */

const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});
