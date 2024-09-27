import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

// 1 > 1
// 2 > 4 + 1
// 3 > 9 + 4 + 1
// 4 > 16 + 9 + 4 + 1
// 5 > 25 + 16 + 9 + 4 + 1

// 8 > 204

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split(/\s/).map(Number);

  arr.pop();

  arr.map((value) => {
    let sum = 0;
    while (value) {
      sum += value ** 2;
      value--;
    }
    console.log(sum);
  });
};

solution(input);
