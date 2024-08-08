import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [range, ...testCases] = stdinInput.trim().split("\n").map(Number);

  let zero: number, one: number;

  for (let i = 0; i < range; i++) {
    [zero, one] = [1, 0];

    for (let j = 0; j < testCases[i]; j++) {
      [zero, one] = [one, zero + one];
    }
    console.log(zero, one);
  }
};

solution(input);
