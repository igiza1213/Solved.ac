import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...arr] = stdinInput.trim().split("\n");

  let o = 0;
  let s = 0;

  arr.map((value) => {
    value.split("").map((v) => {
      if (v === "O") {
        o += 1;
        s += o;
      } else o = 0;
    });
    console.log(s);
    [s, o] = [0, 0];
  });
};

solution(input);
