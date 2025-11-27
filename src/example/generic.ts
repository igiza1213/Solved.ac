function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // 성공

// @ts-ignore
getProperty(x, "m"); // 오류: 인수의 타입 'm' 은 'a' | 'b' | 'c' | 'd'에 해당되지 않음.
