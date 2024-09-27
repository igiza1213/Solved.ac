import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[s], [T], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" "));

  let str: string[] = s.split("");

  arr.map(([a, b]) => {
    [str[+a], str[+b]] = [str[+b], str[+a]];
  });

  console.log(str.join(""));
};

solution(input);
