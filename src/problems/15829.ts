import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, str] = stdinInput.trim().split("\n");

  const N = +T;
  let hash = 0;
  let r = 1;
  for (let i = 0; i < N; i++) {
    hash += (str.charCodeAt(i) - 96) * r;
    hash %= 1234567891;
    r *= 31;
    r %= 1234567891;
  }

  console.log(hash)
};

solution(input);
