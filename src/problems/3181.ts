import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const words = ["i", "pa", "te", "ni", "niti", "a", "ali", "nego", "no", "ili"];

export const solution = (stdinInput: string) => {
  const n = stdinInput.trim().split(" ");
  console.log(
    n
      .map((value, i) => {
        if (!words.includes(value) || !i) return value[0];
      })
      .join("")
      .toUpperCase()
  );
};

solution(input);
