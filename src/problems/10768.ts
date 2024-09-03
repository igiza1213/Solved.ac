import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [m, d] = stdinInput.trim().split("\n").map(Number);

  if (m < 2) console.log("Before");
  else if (m == 2) {
    if (d < 18) console.log("Before");
    else if (d > 18) console.log("After");
    else console.log("Special");
  } else console.log("After");
};

solution(input);
