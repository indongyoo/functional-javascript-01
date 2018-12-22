const apply1 = f => f(1);
// f가 들어가면 f(1)를 리턴한다.
const add2 = a => a + 2;
// a를 넣어 a+2를 리턴
console.log(apply1(add2));
// add2(1), 3 리턴
console.log(a => a - 1);

const times = (f, n) => {
    let i = -1;
    while (++i < n) f(i); // 0,1,2
};

times(console.log, 3);
/**
 * console.log(0);
 * console.log(1);
 * console.log(2);
 */

// applicative programming
times(a => console.log(a + 10), 3);
/**
 * f(1), console.log(1+10)
 * f(2), console.log(2+10)
 * f(3), console.log(3+10)
 */

 // 함수를 만들어 리턴 = 클로저를 만든다.
 const addMaker = a => b => a+b; // 클로저 리턴
 const add10 = addMaker(10); // 함수를 리턴 
 // b => 10+b
 console.log(add10(5));
 console.log(add10(10));