import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[N, M], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" "));

  const map = new Map<string, string>();

  let i;
  for (i = 0; i < Number(N); i++) {
    map.set(arr[i][0], arr[i][1]);
  }

  for (i; i < Number(N) + Number(M); i++) {
    console.log(map.get(arr[i][0]));
  }
};

solution(input);
