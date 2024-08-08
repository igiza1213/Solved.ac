import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim();

  let result = "";

  if (s === "M") {
    result = "MatKor";
  } else if (s === "W") {
    result = "WiCys";
  } else if (s === "C") {
    result = "CyKor";
  } else if (s === "A") {
    result = "AlKor";
  } else if (s === "$") {
    result = "$clear";
  }

  console.log(result)
};

solution(input);
