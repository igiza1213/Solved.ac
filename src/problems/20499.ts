import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [k, d, a] = stdinInput.trim().split("/").map(Number);

  console.log(k + a < d || d == 0 ? "hasu" : "gosu");
};

solution(input);
