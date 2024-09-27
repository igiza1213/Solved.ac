import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [[n], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  let index = 0;

  arr.some((value, i) => {
    index = i;
    return value[1] === Math.max(...arr.map((value) => value[1]));
  });

  arr = arr
    .filter((value, i) => {
      return value[1] === Math.max(...arr.map((value) => value[1]));
    })
    .sort((a, b) => a[0] - b[0]);

  console.log(arr[0][1] === 0 ? 0 : arr[0][0] + index * 20);
};

solution(input);
