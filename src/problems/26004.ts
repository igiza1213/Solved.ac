import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, s] = stdinInput.trim().split(/\s/);
  let [H, I, A, R, C] = [0, 0, 0, 0, 0];

  s.split("").map((value) => {
    if (value === "H") H++;
    else if (value === "I") I++;
    else if (value === "A") A++;
    else if (value === "R") R++;
    else if (value === "C") C++;
  });

  console.log(Math.min(H, I, A, R, C));
};

solution(input);
