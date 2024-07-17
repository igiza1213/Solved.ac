import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [ax, ay, az, cx, cy, cz] = stdinInput.trim().split(/\s/).map(Number);

  console.log(cx - az, cy / ay, cz - ax);
};

solution(input);
