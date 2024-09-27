import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, a, b] = stdinInput.trim().split(/\s/).map(Number);

  if (N == 1) console.log(0);
  else if (N == 2) console.log(2);
  else {
    if (
      (a == 1 && b == 1) ||
      (a == 1 && b == N) ||
      (a == N && b == 1) ||
      (a == N && b == N)
    )
      console.log(2);
    else if (
      (a == 1 && b < N) ||
      (a < N && b == N) ||
      (a < N && b == 1) ||
      (a == N && b < N)
    )
      console.log(3);
    else console.log(4);
  }
};

solution(input);
