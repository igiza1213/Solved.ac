import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, a, b] = stdinInput.trim().split(/\s/).map(Number);

  let [one, two] = [1, 1];

  for (let i = 0; i < n; i++) {
    [one, two] = [one + a, two + b];

    if (one < two) {
      [one, two] = [two, one];
    } else if (one === two) {
      two -= 1;
    }
  }

  console.log(one, two);
};

solution(input);
