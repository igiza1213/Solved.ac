import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, ...arr] = stdinInput.trim().split("\n");

  console.log(
    arr.sort((a, b) => Number(a.split(" ")[0]) - Number(b.split(" ")[0])).join("\n")
  );
};

solution(input);
