import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [m, d] = stdinInput.trim().split(/\s/).map(Number);

  const weak = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const a = [1, 3, 5, 7, 8, 10, 12];
  const b = [4, 6, 9, 11];

  let sum = 0;

  for (let i = 1; i < m; i++) {
    if (a.includes(i)) {
      sum += 31;
    } else if (b.includes(i)) {
      sum += 30;
    } else {
      sum += 28;
    }
  }

  sum += d;

  console.log(weak[sum % 7]);
};

solution(input);
