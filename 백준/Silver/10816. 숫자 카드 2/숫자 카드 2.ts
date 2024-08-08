import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();
export const solution = (stdinInput: string) => {
  const arr = stdinInput.split("\n");
  let N = arr[1]
    .split(" ")
    .map(Number)
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

  let M = arr[3]
    .split(" ")
    .map(Number)
    .map((v) => (N[v] ? N[v] : 0))
    .join(" ");
  console.log(M);
};

solution(input);
