import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...N] = stdinInput.trim().split("\n");

  const S = N.map((v) => v.split(" "));
  const output = S.map(([count, str]) =>
    str
      .split("")
      .map((char) => char.repeat(Number(count)))
      .join("")
  ).join("\n");
  console.log(output);
};

solution(input);
