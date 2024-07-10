import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  const result: string[] = [];

  arr.map((value, i) => {
    result.push(
      `Case #${i+1}: ${value[0]} + ${value[1]} = ${value[0] + value[1]}`
    );
  });

  console.log(result.join("\n"));
};

solution(input);
