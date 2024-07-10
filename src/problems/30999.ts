import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[n, m], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" "));

  console.log(
    arr.filter(
      (value) => value[0].split("").filter((v) => v == "O").length >= Number(m) / 2
    ).length
  );
};

solution(input);
