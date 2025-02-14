import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [[n, m], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  let list = Array.from({ length: n }, (_, i) => i + 1);

  arr.map(([a, b], i) => {
    [list[a - 1], list[b - 1]] = [list[b - 1], list[a - 1]];
  });

  console.log(list.join(" "));
};

solution(input);
