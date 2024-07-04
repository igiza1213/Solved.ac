import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, c] = stdinInput.trim().split("\n").map(Number);
  const mul = a * b * c;
  const arr = mul.toString().split("")
  for (let i = 0; i < 10; i++) {
    console.log(arr.filter((value) => i === Number(value)).length)
  }
};

solution(input);
