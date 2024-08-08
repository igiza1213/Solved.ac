import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  for (let i = 0; i < arr.length; i++) {
    let [h, m, s] = [arr[i][3], arr[i][4], arr[i][5]];
    if (s < arr[i][2]) {
      s = 60 + s;
      m--;
      s = s - arr[i][2];
    } else s = s - arr[i][2];
    if (m < arr[i][1]) {
      m = 60 + m;
      h--;
      m = m - arr[i][1];
    } else m = m - arr[i][1];
    h = h - arr[i][0];
    console.log(h, m, s);
  }
};

solution(input);
