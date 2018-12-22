
/**
 * 부수효과 : 외부 세상에 변화를 일으킨다.
 */
var a = 10;

function f1(b) { // 인자를 받아 외부세상(a)에 변화를 준다.
    a = b;
}
console.log(a);
/**
 * FP에서는 부수효과를 최소화 하려고 함
 * FP에서는 결론과 같은 부분(최종단계)
 */

/**
 * 순수효과 : 부수효과 x,
 * 동일한 인자를 받을 때 어느 시점에서라도 동일한 결과
 */

function add1(a) {
    return a + 1;
}
console.log(add1(1));
console.log(add1(1));
console.log(add1(1));
console.log(add1(1));

setTimeout(() => {
    console.log(add1(1))
}, 10);

let log = console.log
console.log(log);