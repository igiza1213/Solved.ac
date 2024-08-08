import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const gradeMap: { [key: string]: string } = {
  "A+": "4.3",
  A0: "4.0",
  "A-": "3.7",
  "B+": "3.3",
  B0: "3.0",
  "B-": "2.7",
  "C+": "2.3",
  C0: "2.0",
  "C-": "1.7",
  "D+": "1.3",
  D0: "1.0",
  "D-": "0.7",
  F: "0.0",
};

export const solution = (stdinInput: string) => {
  const T = stdinInput.trim();

  console.log(gradeMap[T] ?? 0.0);
};

solution(input);
