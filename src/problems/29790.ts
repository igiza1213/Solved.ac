import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [n, u, l] = stdinInput.trim().split(/\s/).map(Number);

  console.log(
    n >= 1000 ? (u >= 8000 || l >= 260 ? "Very Good" : "Good") : "Bad"
  );
};

solution(input);
