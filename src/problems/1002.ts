import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [range, ...testCases] = stdinInput
    .trim()
    .split(" ")
    .map((value) => parseInt(value));

  let line = {
    x1: testCases[0],
    y1: testCases[0],
    r1: testCases[0],
    x2: testCases[0],
    y2: testCases[0],
    r2: testCases[0],
  };

  for (let i = 0; i < range; i++) {
    testCases;
  }

  console.log(range);
};

solution(input);
