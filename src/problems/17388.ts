import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [s, k, h] = stdinInput.trim().split(" ").map(Number);
  const sum = s + k + h;

  if (sum >= 100) console.log("OK");
  else {
    const min = Math.min(s, k, h);
    console.log(min === s ? "Soongsil" : min === k ? "Korea" : "Hanyang");
  }
};

solution(input);
