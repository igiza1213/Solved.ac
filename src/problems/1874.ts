import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);
  // Array.from({ length: n }, (_, i) => i + 1);
  let list: number[] = [];
  let result: string[] = [];
  let temp: number[] = [];
  let i = 1;
  arr.map((value) => {
    for (; list[list.length - 1] !== value && i <= n; i++) {
      list.push(i);
      result.push("+");
    }

    temp.push(list.pop()!);
    result.push("-");
  });

  console.log(temp.toString() !== arr.toString() ? "NO" : result.join("\n"));
};

solution(input);
