import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

// 3층 1 5 15 35 70
// 2층 1 4 10 20 35
// 1층 1 3 6 10 15
// 0층 1 2 3 4 5

export const solution = (stdinInput: string) => {
  const [T, ...arr] = stdinInput.trim().split("\n").map(Number);

  arr.map((value, i) => {
    if (!(i % 2)) {

    }
  });
};

solution(input);
