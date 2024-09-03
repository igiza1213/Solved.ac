import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim();
  if (s.indexOf("A") !== -1) {
    console.log(s.replace(/[BCDF]/gi, "A"));
  } else if (s.indexOf("B") !== -1) {
    console.log(s.replace(/[CDF]/gi, "B"));
  } else if (s.indexOf("C") !== -1) {
    console.log(s.replace(/[DF]/gi, "C"));
  } else {
    console.log(s.replace(/\w/gi, "A"));
  }
};

solution(input);
