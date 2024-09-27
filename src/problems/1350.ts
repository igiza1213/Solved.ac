import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);
  const size = arr.pop()!;

  let count = 0;

  arr.map((file) => {
    if (file % size == 0) count += Math.floor(file / size);
    else count += Math.floor(file / size + 1);
  });

  console.log(size * count);
};

solution(input);
