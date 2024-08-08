import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let arr = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  arr.pop();

  arr.map((value, i) => {
    console.log("Triangle #" + (i + 1));
    if (value[2] === -1) {
      console.log("c = " + ((value[0] ** 2 + value[1] ** 2) ** 0.5).toFixed(3));
    } else if (Math.max(value[0], value[1]) >= value[2]) {
      console.log("Impossible.");
    } else if (value[0] === -1) {
      console.log("a = " + ((value[2] ** 2 - value[1] ** 2) ** 0.5).toFixed(3));
    } else if (value[1] === -1) {
      console.log("b = " + ((value[2] ** 2 - value[0] ** 2) ** 0.5).toFixed(3));
    }
    console.log();
  });
};

solution(input);
