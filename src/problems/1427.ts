import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim();

  console.log(
    s
      .split("")
      .sort((a, b) => Number(b) - Number(a))
      .join("")
  );
};

solution(input);
