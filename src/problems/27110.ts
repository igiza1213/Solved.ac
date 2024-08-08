import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  console.log(
    arr.reduce((acc, cur) => (n - cur >= 0 ? acc + cur : acc + n), 0)
  );
};

solution(input);
