import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, ...arr] = stdinInput.trim().split("\n");

  console.log(
    Array.from(new Set(arr))
      .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
      .sort((a, b) => a.length - b.length)
      .join("\n")
  );
};

solution(input);
