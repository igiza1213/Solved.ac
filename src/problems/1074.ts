// 36진수

import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const zet = (
  q: number,
  x: number,
  y: number,
  r: number,
  c: number,
  i: number
) => {

  
};

// r: 세로, c: 가로

export const solution = (stdinInput: string) => {
  const [n, r, c] = stdinInput.trim().split(/\s/).map(Number);

  let q = 0;
  if (2 ** n / 2 > r && 2 ** n / 2 <= c) {
    q = 1;
  } else if (2 ** n / 2 > r && 2 ** n / 2 > c) {
    q = 2;
  } else if (2 ** n / 2 <= r && 2 ** n / 2 > c) {
    q = 3;
  } else {
    q = 4;
  }

  zet(q, )

};

solution(input);
