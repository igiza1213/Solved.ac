import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[n], ...matrix] = stdinInput
    .trim()
    .split("\n")
    .map((value) => value.split(" ").map(Number));

  console.log(n, matrix);

  let axis = matrix.map()

  console.log(axis);
};

solution(input);
