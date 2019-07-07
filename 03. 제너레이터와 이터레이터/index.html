<script>const log = console.log;</script>

# 제너레이터/이터레이터
- 제너레이터: 이터레이터이자 이터러블을 생성하는 함수

<script>
  function* gen() {
    yield 1;
    if (false) yield 2;
    yield 3;
  }

  let iter = gen();
  log(iter[Symbol.iterator]() == iter);
  log(iter.next());
  log(iter.next());
  log(iter.next());
  log(iter.next());

  for (const a of gen()) log(a);
  console.clear();
</script>

# odds

<script>
  function* infinity(i = 0) {
    while (true) yield i++;
  }

  function* limit(l, iter) {
    for (const a of iter) {
      yield a;
      if (a == l) return;
    }
  }

  function* odds(l) {
    for (const a of limit(l, infinity(1))) {
      if (a % 2) yield a;
    }
  }

  let iter2 = odds(10);
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());

  for (const a of odds(40)) log(a);

  console.clear();
</script>

# for of, 전개 연산자, 구조 분해, 나머지 연산자

<script>
  log(...odds(10));
  log([...odds(10), ...odds(20)]);

  const [head, ...tail] = odds(5);
  log(head);
  log(tail);

  const [a, b, ...rest] = odds(10);
  log(a);
  log(b);
  log(rest);
</script>
