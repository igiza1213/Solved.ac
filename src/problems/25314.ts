import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  let arr: string[] = [];

  for (let i = 1; i <= n / 4; i++) {
    arr.push("long");
  }
  console.log(arr.join(" ") + " int");
};

solution(input);
