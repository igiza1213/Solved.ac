import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[n], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((value) => value.split(" ").map(Number));

  for (let i = 1; i < n; i++) {
    let [ar, ag, ab] = arr[i - 1];

    let [r, g, b] = arr[i];

    arr[i] = [
      Math.min(ag + r, ab + r),
      Math.min(ar + g, ab + g),
      Math.min(ar + b, ag + b),
    ];
  }

  console.log(Math.min(...arr[arr.length - 1]));
};

solution(input);
