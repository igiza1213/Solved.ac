import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const sub = (arr: number[], sum: number): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] == 100 && i != j) {
        return arr.filter((_, index) => index != i && index != j);
      }
    }
  }
};

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split("\n").map(Number);

  const sum = arr.reduce((pre, cur) => pre + cur);

  console.log(sub(arr, sum).join("\n"));
};

solution(input);
