import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [cur, n, ...arr] = stdinInput.trim().split(/\s/);
  const curDate = new Date(cur);
  console.log(arr.filter((value) => curDate <= new Date(value)).length);
};

solution(input);
