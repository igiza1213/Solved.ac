import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim().split("\n");

  s.pop();

  const vowel = ["a", "e", "i", "o", "u"];

  

  console.log(s.map((value, i) => {
    let cnt = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === "#") {
        return;
      }
      if (vowel.includes(value[i].toLowerCase())) {
        cnt++;
      }
    }

    return cnt;
  }).join("\n"))
};

solution(input);
