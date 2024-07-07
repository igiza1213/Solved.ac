import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const gcd = (a: number, b: number): number => {
  if (b == 0) return a;
  else return gcd(b, a % b);
};

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput.trim().split(" ").map(Number);

  console.log(gcd(a, b));
  console.log((a * b) / gcd(a, b));
};

solution(input);
