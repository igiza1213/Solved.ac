import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, s] = stdinInput.trim().split(/\s/);

  const arr = s.split("");
  const result: string[] = [];

  for (let i = 0; i < arr.length / Number(n); i++) {
    result.push(arr[i * Number(n)]);
  }

  console.log(result.join(""));
};

solution(input);
