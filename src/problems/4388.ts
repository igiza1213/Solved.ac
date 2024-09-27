import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  arr.pop();

  const result: number[] = [];
  arr.map((value) => {
    let cnt = 0;
    let acc = 0;
    let [a, b] = value;

    while (a != 0 || b != 0) {
      let aa = a % 10;
      let bb = b % 10;

      a /= 10;
      b /= 10;

      if (aa + bb + acc >= 10) {
        cnt++;
        acc = 1;
      } else acc = 0;
    }
    result.push(cnt);
  });

  console.log(result.join("\n"));
};

solution(input);
