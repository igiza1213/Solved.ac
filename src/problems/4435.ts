import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const arr1 = [1, 2, 3, 3, 4, 10];
const arr2 = [1, 2, 2, 2, 3, 5, 10];

export const solution = (stdinInput: string) => {
  const [T, ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  arr.map((value, i) => {
    if (!(i % 2)) {
      const num1 = value
        .map((item, j) => item * arr1[j])
        .reduce((a, b) => a + b);
      const num2 = arr[i + 1]
        .map((item, j) => item * arr2[j])
        .reduce((a, b) => a + b);
      console.log(
        num1 === num2
          ? `Battle ${i / 2 + 1}: No victor on this battle field`
          : num1 < num2
          ? `Battle ${i / 2 + 1}: Evil eradicates all trace of Good`
          : `Battle ${i / 2 + 1}: Good triumphs over Evil`
      );
    }
  });
};

solution(input);
