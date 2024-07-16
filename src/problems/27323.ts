import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split("\n");

  console.log(
    arr
      .map((value) => (value.length >= 6 && value.length <= 9 ? "yes" : "no"))
      .join("\n")
  );
};

solution(input);
