import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

// 1
// 2, 3
// 4, 5, 6
// 7, 8, 9, 10
// 11, 12, 13, 14, 15
// 16, 17, 18, 19, 20, 21
const first = [
  500, 300, 300, 200, 200, 200, 50, 50, 50, 50, 30, 30, 30, 30, 30, 10, 10, 10,
  10, 10, 10,
];

// 1
// 2, 3
// 4, 5, 6, 7
// 8, 9, 10, 11, 12, 13, 14, 15
// 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
const second = [
  512, 256, 256, 128, 128, 128, 128, 64, 64, 64, 64, 64, 64, 64, 64, 32, 32, 32,
  32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
];

export const solution = (stdinInput: string) => {
  const [T, ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map((v) => +v));

  console.log(
    arr
      .map((value) => {
        let money = 0;

        if (value[0] > 0 && value[0] <= 21) money += first[value[0] - 1];
        if (value[1] > 0 && value[1] <= 31) money += second[value[1] - 1];

        return money * 10000;
      })
      .join("\n")
  );
};

solution(input);
