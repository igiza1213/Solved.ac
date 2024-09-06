import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const datas = [
  [12, 1600],
  [11, 894],
  [11, 1327],
  [10, 1311],
  [9, 1004],
  [9, 1178],
  [9, 1357],
  [8, 837],
  [7, 1055],
  [6, 556],
  [6, 773],
];

export const solution = (stdinInput: string) => {
  const n = +stdinInput.trim();
  console.log(datas[n - 1].join(" "));
};

solution(input);
