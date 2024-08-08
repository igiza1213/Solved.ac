import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split(/\s/).map(Number);

  let result = 0;
  let i: number;
  for (i = 0; i < 10; i++) {
    if (result >= 100) break;
    result += arr[i];
  }

  if (Math.abs(100 - (result - arr[i - 1])) < Math.abs(100 - result))
    result = result - arr[i - 1];

  console.log(result);
};

solution(input);
