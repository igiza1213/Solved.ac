import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [num] = stdinInput
    .trim()
    .split(" ")
    .map((value) => parseInt(value));

  let s = "";
  switch (true) {
    case num >= 90:
      s = "A";
      break;
    case num >= 80:
      s = "B";
      break;
    case num >= 70:
      s = "C";
      break;
    case num >= 60:
      s = "D";
      break;
    default:
      s = "F";
      break;
  }

  console.log(s);
};

solution(input);
