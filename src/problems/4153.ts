import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput
    .trim()
    .split("\n")
    .map((line) =>
      line
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b)
    );

  const end = arr.pop();
  arr.map((value, i) => {
    console.log(
      value[0] * value[0] + value[1] * value[1] == value[2] * value[2]
        ? "right"
        : "wrong"
    );
  });
};

solution(input);
