import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...arr] = stdinInput.trim().split("\n").map(Number);
  if (T === 0) {
    console.log(0);
    return;
  }

  arr.sort((a, b) => a - b);

  const trim = +(arr.length * 0.15).toFixed();
  const trimmedArr = arr.slice(trim, arr.length - trim);

  console.log(
    (trimmedArr.reduce((acc, cur) => acc + cur) / trimmedArr.length).toFixed()
  );
};

solution(input);
