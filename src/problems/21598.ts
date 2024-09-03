import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = BigInt(stdinInput.trim());

  const result: string[] = [];
  for (let i = 0; i < n; i++) {
    result.push("SciComLove");
  }

  console.log(result.join("\n"));
};

solution(input);
