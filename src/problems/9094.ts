import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[T], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  arr.map((value, t) => {
    const [n, m] = value;
    let result = 0;
    for (let i = 1; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if ((i * i + j * j + m) % (i * j) == 0) result += 1;
      }
    }
    console.log(result);
  });
};

solution(input);
