import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[N], A, [M], S] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  A.sort((a, b) => a - b);

  let ans: number[] = [];

  S.map((value, i) => {
    let start = 0;
    let end = A.length - 1;
    let res = false;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (value < A[mid]) {
        end = mid - 1; //
      } else if (value > A[mid]) {
        start = mid + 1;
      } else {
        res = true;
        break;
      }
    }
    if (res === true) {
      ans.push(1);
    } else {
      ans.push(0);
    }
  });

  console.log(ans.join("\n"));
};

solution(input);
