import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" "));

  arr.pop();

  console.log(
    arr
      .map((value, i) =>
        Number(value[1]) > 17 || Number(value[2]) >= 80
          ? value[0] + " Senior"
          : value[0] + " Junior"
      )
      .join("\n")
  );
};

solution(input);
