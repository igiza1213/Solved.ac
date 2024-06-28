import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...name] = stdinInput.trim().split("\n");

  name.map((value) => {
    value.includes("S") ? console.log(value) : "";
  });
};

solution(input);
