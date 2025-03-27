import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [m, n] = stdinInput.trim().split(/\s/).map(Number);

  for (let i = m; i <= n; i++) {
    if (i !== 1) {
      let d: number[] = [];
      for (let j = 2; j < Math.floor(i ** 0.5) + 1; j++) {
        if (i % j == 0) {
          d.push(i);
          break;
        }
      }
      if (d.length == 0) {
        console.log(i);
      }
    }
  }
};

solution(input);
