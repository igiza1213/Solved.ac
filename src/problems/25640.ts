import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [t, n, ...arr] = stdinInput.trim().split(/\s/);

  console.log(arr.filter((value) => value === t).length);
};

solution(input);
