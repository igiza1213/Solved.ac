// 36진수

import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const n36 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function convert(value: string, radix: number) {
  return Array.from(value.toString()).reduce(
    (r, v) => r * BigInt(radix) + BigInt(parseInt(v, radix)),
    BigInt(0)
  );
}

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/);
  const k = Number(arr.pop());
  const numMap = new Map<string, bigint>();
  for (let i = 0; i < n36.length; i++) {
    numMap.set(n36[i], BigInt(0));
  }

  arr.map((word) => {
    word.split("").map((char, i) => {
      numMap.set(
        char,
        numMap.get(char)! +
          BigInt(35 * 36 ** (word.length - 1 - i)) -
          BigInt(parseInt(char, 36) * 36 ** (word.length - 1 - i))
      );
    });
  });

  const answor = Array.from(numMap)
    .sort((a, b) => +(b[1] - a[1]).toString())
    .map((a) => a[0])
    .slice(0, k)
    .join("");
  const regex = new RegExp(`[${answor}]`, "gi");
  const newArr = arr.map((word) => word.replace(regex, "Z"));

  console.log(
    newArr
      .reduce((acc, cur) => convert(cur, 36) + acc, BigInt(0))
      .toString(36)
      .toUpperCase()
  );
};

solution(input);
