import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  arr.filter((value) => value).length > n / 2
    ? console.log("Junhee is cute!")
    : console.log("Junhee is not cute!");
};

solution(input);
