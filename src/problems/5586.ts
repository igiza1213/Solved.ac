import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim();

  let [JOI, IOI] = [0, 0];

  for (let i = 2; i < s.length; i++) {
    if (s[i] === "I" && s[i - 1] === "O") {
      if (s[i - 2] === "J") JOI++;
      else if (s[i - 2] === "I") IOI++;
    }
  }

  console.log(JOI);
  console.log(IOI);
};

solution(input);
