import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim();
  let a: string, b: string;

  a = s.slice(0, s.length / 2);
  b = s.slice(s.length / 2);
  if (b.length > s.length / 2) b = b.slice(1);
  if (s.length === 1) console.log(1);
  else console.log(a === b.split("").reverse().join("") ? 1 : 0);
};

solution(input);
