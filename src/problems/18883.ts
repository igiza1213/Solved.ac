import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput.trim().split(/\s/).map(Number);

  const arr = Array.from({ length: a * b }, (_, i) => i + 1);
  console.log(
    arr
      .map((value, i) => {
        if ((i + 1) % b === 0) {
          return value + "\n";
        }
        return value + " ";
      })
      .join("")
  );
};

solution(input);
