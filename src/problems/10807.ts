import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, n, v] = stdinInput
    .trim()
    .split("\n")

    const arr = n.split(" ").map(Number)

  console.log(arr.filter(element => Number(v) === element).length);
};

solution(input);
