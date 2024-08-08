import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [S,N] = stdinInput
    .trim().split("\n")

    

  console.log(S[parseInt(N)-1])
};

solution(input);
