import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [A, B] = stdinInput.trim().split(/\s/).map(Number);
  let res = 0;
  while (B > A) {
    res++;
    if (B % 10 === 1) B = Math.floor(B / 10);
    else if (B % 2 === 0) B /= 2;
    else {
      res = -1;
      break;
    }
  }
  console.log(A === B ? ++res : -1);
};

solution(input);
