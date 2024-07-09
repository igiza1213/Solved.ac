import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split("\n").map(line=>line.split(" ").map(Number));


    console.log(arr.map((v) => Math.floor(v[1] / (v[0] + 1))).join("\n"));

};

solution(input);
