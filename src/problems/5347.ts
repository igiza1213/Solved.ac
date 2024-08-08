import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const gcd = (a: number, b: number): number => {
  if (b == 0) return a;
  else return gcd(b, a % b);
};

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  console.log(
    arr
      .map((value) => (value[0] * value[1]) / gcd(value[0], value[1]))
      .join("\n")
  );
};

solution(input);
