import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [N, M, ...arr] = stdinInput.trim().split(/\s/);

  const count: { [key: string]: number } = {};
  const result: string[] = [];

  for (const name of arr) {
    count[name] = (count[name] || 0) + 1;
  }

  for (const name in count) {
    if (count[name] >= 2) {
      result.push(name);
    }
  }

  result.sort();
  console.log(result.length + "\n" + result.join("\n"));
};

solution(input);
