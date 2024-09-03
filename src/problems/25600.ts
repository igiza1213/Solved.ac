import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[n], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  console.log(
    Math.max(
      ...arr.map((value) => {
        let s = value[0] * (value[1] + value[2]);
        if (value[0] == value[1] + value[2]) s *= 2;
        return s;
      })
    )
  );
};

solution(input);
