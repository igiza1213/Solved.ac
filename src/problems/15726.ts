import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, c] = stdinInput.trim().split(" ").map(Number);

  console.log(
    ((BigInt(a) * BigInt(Math.max(b, c))) / BigInt(Math.min(b, c)))
      .toString()
      .split(".")[0]
  );
};

solution(input);
