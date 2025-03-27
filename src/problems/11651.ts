import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[N], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  console.log(
    arr
      .sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0] - b[0];
        } else {
          return a[1] - b[1];
        }
      })
      .map((line) => line.join(" "))
      .join("\n")
  );
};

solution(input);
