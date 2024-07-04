import fs = require("fs");
var input = fs.readFileSync(0, "utf-8").toString();

export const solution = (stdinInput: string) => {
  const [x, y] = stdinInput.trim().split("\n").map(Number);

  let str = "";

  if (x > 0 && y > 0) {
    str = "1";
  } else if (x < 0 && y > 0) {
    str = "2";
  } else if (x < 0 && y < 0) {
    str = "3";
  } else {
    str = "4";
  }
  console.log(str);
};

solution(input);
