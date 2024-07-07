import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());
  console.log(factorial(n));
};

solution(input);
