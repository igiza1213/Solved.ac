import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

// 3등분 2/3 * 1
// 5등분 4/5 * 2
// 7등분 6/7 * 3

export const solution = (stdinInput: string) => {
  const [w, h, n] = stdinInput.trim().split(" ").map(Number);
  let result =
    n % 2 ? h * ((n - 1) / n) * Math.floor(n / 2) : h * ((n - 2) / 2);

  console.log(result.toFixed(7));
};

solution(input);
