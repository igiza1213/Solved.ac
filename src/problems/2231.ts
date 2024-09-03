import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  for (let i = 0; i < n; i++) {
    let sum = i;
    for (let j = 0; j < i.toString().length; j++) {
      sum += Number(i.toString()[j]);
    }
    if (n === sum) {
      console.log(i);
      break;
    }
    if (i === n - 1) {
      console.log(0);
    }
  }
};

solution(input);
