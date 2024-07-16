import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/);

  let count = 0;
  const result = arr.map((cases) => {
    count = 0;

    try {
      cases.split("").map((value) => {
        if (value == "(") {
          count++;
        } else {
          count--;
        }

        if (count < 0) {
          throw new Error("stop loop");
        }
      });
    } catch (e) {}

    if (count == 0) {
      return "YES";
    } else {
      return "NO";
    }
  });

  console.log(result.join("\n"));
};

solution(input);
