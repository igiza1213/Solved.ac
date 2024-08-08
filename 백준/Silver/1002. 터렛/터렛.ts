import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [range, ...testCases] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map((value) => parseInt(value)));

  for (let i = 0; i < range[0]; i++) {
    let [x1, y1, r1, x2, y2, r2] = testCases[i];
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let dradius = Math.abs(r2 - r1);
    if (distance < dradius) {
      console.log(0);
    } else if (distance == dradius) {
      console.log(r2 == r1 ? -1 : 1);
    } else if (distance == r2 + r1) {
      console.log(1);
    } else if (distance > r2 + r1) {
      console.log(0);
    } else {
      console.log(2);
    }
  }
};

solution(input);
