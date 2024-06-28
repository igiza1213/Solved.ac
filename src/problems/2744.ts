import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const str = stdinInput.trim();
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) answer += str[i].toLowerCase();
    else answer += str[i].toUpperCase();
  }
  console.log(answer);
};

solution(input);
