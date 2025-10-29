import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = +stdinInput.trim();

  const m = 8 + (n - 1) * 7;

  // convert to year and month
  const year = 2024 + Math.floor((m - 1) / 12);
  const month = ((m - 1) % 12) + 1;

  console.log(`${year} ${month}`);
};

solution(input);
