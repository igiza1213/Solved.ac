import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [H, M] = stdinInput.trim().split(" ").map(Number);

  if (M < 45) {
    H = H === 0 ? 23 : H - 1;
    M = 60 - (45 - M);
  } else {
    M = M - 45;
  }

  console.log(H, M)
  
};

solution(input);
