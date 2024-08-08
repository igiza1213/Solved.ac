import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...testCase] = stdinInput.trim().split("\n").map(Number);

  const result: number[] = [];
  let lineIndex = 0;

  for (let i = 0; i < T; i++) {
    const N = testCase[lineIndex];

    const nums: number[] = [];

    for (let j = 0; j < N; j++) {
      nums.push(testCase[lineIndex + 1 + j]);
    }

    lineIndex += N + 1;

    if (N === 1) {
      result.push(1);
      continue;
    }

    for (let m = 2; ; m++) {
      if (
        nums.length ===
        Array.from(new Set(nums.map((value) => value % m))).length
      ) {
        result.push(m);
        break;
      }
    }
  }

  console.log(result.join("\n"));
};

solution(input);
