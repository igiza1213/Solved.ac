import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim();

  console.log(
    s.indexOf("w") === -1
      ? s.indexOf("g") === -1
        ? "nabi"
        : "yeongcheol"
      : "chunbae"
  );
};

solution(input);
