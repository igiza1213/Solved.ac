import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  const N = arr.shift();
  console.log(
    arr[0].filter((number) => {
      for (let i = 2; number > i; i += 1) {
        if (number % i === 0) {
          return false;
        }
      }
      return number > 1;
    }).length
  );
};

solution(input);
