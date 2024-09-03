import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  let [m, y] = [0, 0];

  arr.map((value) => {
    y += Math.floor(value / 30 + 1) * 10;
    m += Math.floor(value / 60 + 1) * 15;
  });

  console.log(m < y ? "M " + m : m > y ? "Y " + y : "Y M " + m);
};

solution(input);
