import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const result: string[] = [];
export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  for (let i = 0; i < n * 5; i++) {
    for (let j = 0; j < n * 5; j++) {
      result.push(
        j < n || n * 5 - n <= j || (n * 2 <= i && i < n * 3) || i >= n * 4
          ? "@"
          : " "
      );
    }
    result.push("\n");
  }

  process.stdout.write(result.join(""));
};

solution(input);
