## yield*

```javascript
L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) for (const b of a) yield b
    else yield a;
  }
};
```

`yield*`을 활용하면 위 코드를 아래와 같이 변경할 수 있습니다. `yield* iterable`은 `for (const val of iterable) yield val;` 과 같습니다.

```javascript
L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* a;
    else yield a;
  }
};
```

## L.deepFlat

만일 깊은 Iterable을 모두 펼치고 싶다면 아래와 같이 `L.deepFlat`을 구현하여 사용할 수 있습니다. `L.deepFlat`은 깊은 Iterable을 펼쳐줍니다.

```javascript
L.deepFlat = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* f(a);
    else yield a;
  }
};
log([...L.deepFlat([1, [2, [3, 4], [[5]]]])]);
// [1, 2, 3, 4, 5];
```