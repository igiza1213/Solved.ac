import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  arr.map((value) => {
    let level = value[2] % value[0];
    let unit = Math.floor(value[2] / value[0]) + 1;

    if (level == 0) {
      level = value[0];
      unit -= 1;
    }

    console.log(level + (unit / 10 >= 1 ? "" : "0") + unit);
  });
};

solution(input);
