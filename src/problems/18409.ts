import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, S] = stdinInput.trim().split(/\s/);
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < +N; i++) {
    if (vowels.some((v) => v === S[i])) count++;
  }
  console.log(count);
};

solution(input);
