import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a] = stdinInput.trim().split(" ").map(Number);

  if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    console.log("1");
  } else {
    console.log("0");
  }
};

solution(input);
