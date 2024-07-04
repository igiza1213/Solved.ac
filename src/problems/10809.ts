import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const S = stdinInput.trim();
  const arr = S.split("").map((value) => value.charCodeAt(0));

  console.log(
    Array.from({ length: 26 }, (_, index) => index + 97)
      .map((value) => arr.indexOf(value))
      .join(" ")
  );
};

solution(input);
