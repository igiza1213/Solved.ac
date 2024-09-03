import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = stdinInput.trim();
  let s = "";
  if (n === "SONGDO") {
    s = "HIGHSCHOOL";
  } else if (n === "CODE") {
    s = "MASTER";
  } else if (n === "2023") {
    s = "0611";
  } else if (n === "ALGORITHM") {
    s = "CONTEST";
  }

  console.log(s)
};

solution(input);
