import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = +stdinInput.trim();

  let count = 665;

  for (let i = 0; i < s; ) {
    count++;
    if (/[6]{3}/.test(count.toString())) i++;
  }
  console.log(count);
};

solution(input);
