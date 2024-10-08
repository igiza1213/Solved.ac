import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = BigInt(stdinInput.trim());

  console.log((n % BigInt(20000303)).toString());
};

solution(input);
