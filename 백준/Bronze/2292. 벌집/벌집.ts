import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  // let count = 1;
  // let sum = 1;
  // while (sum < n) {
  //   sum += 6 * count;
  //   count++;
  // }
  // console.log(count);

  console.log(Math.ceil(((12 * (n - 1) + 9) ** 0.5 - 3) / 6) + 1);
};

solution(input);
