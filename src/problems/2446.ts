import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  let result: string[] = [];

  let e = n * 2 - 1;

  for (let i = 0; i < n; i++) {
    result.push(" ".repeat(i) + "*".repeat(e));

    e -= 2;
  }

  console.log(
    result.join("\n") + "\n" + result.slice(0, -1).reverse().join("\n")
  );
};

solution(input);
