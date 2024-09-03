import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  const s = "WelcomeToSMUPC";
  console.log(s[(n % s.length) - 1 == -1 ? 13 : (n % s.length) - 1]);
};

solution(input);
