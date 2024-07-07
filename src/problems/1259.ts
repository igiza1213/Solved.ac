import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split("\n");

  const end = arr.pop();

  arr.map((value) => {
    value
      .split("")
      .map((ai, i) => value[i] == value[value.length - 1 - i])
      .includes(false)
      ? console.log("no")
      : console.log("yes");
  });
};

solution(input);
