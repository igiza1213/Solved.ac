import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  arr.pop();

  let [a, b, c, d] = [0, 0, 0, 0];
  let list: number[] = [];
  let i = 0;

  arr.map((value) => {
    list = value;
    [a, b, c, d] = [list[0], list[1], list[2], list[3]];
    i = 0;
    while (true) {
      [a, b, c, d] = list;
      if (a == b && b == c && c == d) break;

      list = [
        Math.abs(a - b),
        Math.abs(b - c),
        Math.abs(c - d),
        Math.abs(d - a),
      ];

      i++;
    }
    console.log(i);
  });
};

solution(input);
