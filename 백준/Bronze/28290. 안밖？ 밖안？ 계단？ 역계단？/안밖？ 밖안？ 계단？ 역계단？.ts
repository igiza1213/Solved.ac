import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim();
  let result = "";
  if (s === "fdsajkl;" || s === "jkl;fdsa") {
    result = "in-out";
  } else if (s === "asdf;lkj" || s === ";lkjasdf") {
    result = "out-in";
  } else if (s === "asdfjkl;") {
    result = "stairs";
  } else if (s === ";lkjfdsa") {
    result = "reverse";
  } else {
    result = "molu";
  }

  console.log(result);
};

solution(input);
