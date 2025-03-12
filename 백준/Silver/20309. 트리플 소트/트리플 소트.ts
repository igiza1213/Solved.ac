import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  try {
    arr.map((value, i) => {
      if (Math.abs(value - (i + 1)) % 2 == 1) {
        throw new Error("stop loop");
      }
    });

    console.log("YES");
  } catch (error) {
    console.log("NO");
  }
};

solution(input);
