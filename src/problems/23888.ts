import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const solution = (stdinInput: string) => {
  let [a, d, q, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  let qArr: number[][] = [];
  let n = 3;

  for (let i = 0; i < arr.length / n; i++) {
    qArr.push(arr.slice(i * n, i * n + n));
  }

  const sum = (l: number, r: number): string => {
    l--;
    const Sl =
      (BigInt(l) *
        (BigInt(2) * BigInt(a) + (BigInt(l) - BigInt(1)) * BigInt(d))) /
      BigInt(2);
    const Sr =
      (BigInt(r) *
        (BigInt(2) * BigInt(a) + (BigInt(r) - BigInt(1)) * BigInt(d))) /
      BigInt(2);

    return (Sr - Sl).toString();
  };

  console.log(
    qArr
      .map(([t, l, r]) => {
        if (t === 1) {
          return sum(l, r);
        } else {
          // A_l = a + (l - 1) * d
          return l === r ? a + (l - 1) * d : gcd(a + (l - 1) * d, d);
        }
      })
      .join("\n")
  );
};

// 8 12

// const t0 = console.time();
solution(input);
// const t1 = console.timeEnd();

// 이새끼가 문제임
// const gcd = (l: number, r: number): number => {
//   let gcd = 1;
//   const divCnt = new Map();

//   const addCount = (div: number) => {
//     if (divCnt.has(div)) divCnt.set(div, divCnt.get(div) + 1);
//     else divCnt.set(div, 1);

//     if (divCnt.get(div) === r - l + 1 && gcd < div) gcd = div;
//   };

//   for (let i = l; i <= r; i++) {
//     let A = a + (i - 1) * d;
//     for (let j = 1; j <= Math.sqrt(A); j++) {
//       if (A % j === 0) {
//         addCount(j);
//         if (A / j !== j) addCount(A / j);
//       }
//     }
//   }

//   return gcd;
// };
