import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim();
  console.log(`:fan::fan::fan:
:fan::${s}::fan:
:fan::fan::fan:`);
};

solution(input);
