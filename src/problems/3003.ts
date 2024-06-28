import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const input_list = stdinInput.trim().split(" ").map(Number);
  const default_list = [1, 1, 2, 2, 2, 8];

  let result = [];
  for (let i = 0; i < 6; i++) {
    result.push(default_list[i] - input_list[i]);
  }

  console.log(result.join(" "));
};

solution(input);
