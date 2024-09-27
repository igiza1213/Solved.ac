import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let arr = stdinInput.trim().split("\n");

  arr.pop();

  arr.map((value) => {
    let result = value;
    while (result.length > 1) {
      result = result
        .split("")
        .reduce((acc, cur) => acc + +cur, 0)
        .toString();
    }
    console.log(result);
  });
};

solution(input);
