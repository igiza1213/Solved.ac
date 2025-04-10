import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [m, n] = stdinInput.trim().split(" ").map(Number);

  console.log(m.toString(n).toUpperCase());
};

solution(input);
