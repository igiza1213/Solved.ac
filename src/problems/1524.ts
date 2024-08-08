import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...testCase] = stdinInput.trim().split(`\n\n`);

  const result: string[] = [];

  testCase.map((value) => {
    const [[N, M], s, b] = value
      .split("\n")
      .map((line) => line.split(" ").map(Number));

    s.sort((a, b) => b - a);
    b.sort((a, b) => b - a);

    while (s.length && b.length) {
      if (s[s.length - 1] >= b[b.length - 1]) {
        b.pop();
      } else {
        s.pop();
      }
    }

    if (s.length) {
      result.push("S");
    } else if (b.length) {
      result.push("B");
    } else {
      result.push("C");
    }
  });

  console.log(result.join("\n"));
};

solution(input);
