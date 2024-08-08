import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  let high = 0;
  let cnt = 0;
  let result = 0;
  arr.map((value, i) => {
    if (value > high) {
      high = value;
      cnt = 0;
    } else {
      cnt++;
    }
    result = Math.max(result, cnt);
  });

  console.log(result);
};

solution(input);
