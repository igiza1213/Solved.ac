import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let n = Number(stdinInput.trim());

  const result = [0, 0, 0];

  if (n % 10 !== 0) {
    console.log("-1");
    return;
  }

  // 300, 60, 10
  while (n > 0) {
    if (n >= 300) {
      n -= 300;
      result[0]++;
    } else if (n >= 60) {
      n -= 60;
      result[1]++;
    } else if (n >= 10) {
      n -= 10;
      result[2]++;
    }
  }

  console.log(result.join(" "));
};

solution(input);
