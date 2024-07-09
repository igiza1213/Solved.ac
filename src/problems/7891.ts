import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[N], ...arr] = stdinInput.trim().split("\n").map(line => line.split(" ").map(Number));

  console.log(arr.map(line => line[0] + line[1]).join("\n"))
};

solution(input);
