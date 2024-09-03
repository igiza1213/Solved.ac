import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, s] = stdinInput.trim().split("\n");

  const chart = [
    [0, 2, 0, 1],
    [2, 1, 3, 0],
    [0, 3, 2, 1],
    [1, 0, 1, 3],
  ];

  const arr: number[] = [];

  let i: number;

  for (i = 0; i < Number(n); i++) {
    if (s[i] == "A") {
      arr.push(0);
    } else if (s[i] == "G") {
      arr.push(1);
    } else if (s[i] == "C") {
      arr.push(2);
    } else {
      arr.push(3);
    }
  }

  let last = arr.pop();
  let first: number | undefined;

  for (i = 0; i < Number(n) - 1; i++) {
    first = arr.pop();

    if (first === last) continue;
    else last = chart[first!][last!];
  }

  console.log(last === 0 ? "A" : last === 1 ? "G" : last === 2 ? "C" : "T");
};

solution(input);
