import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [[y, m, d], [n]] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split("-").map(Number));
  [y, m, d] = [y - 1, m - 1, d - 1];

  d += n;
  m += Math.floor(d / 30);
  y += Math.floor(m / 12);

  console.log(
    [
      y + 1,
      ((m % 12) + 1).toString().padStart(2, "0"),
      ((d % 30) + 1).toString().padStart(2, "0"),
    ].join("-")
  );
};

solution(input);
