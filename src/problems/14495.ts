import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());
  const cache: bigint[] = [0, 1, 1, 1].map(BigInt);
  for (let i = 4; i <= n; i++) {
    cache[i] = cache[i - 3] + cache[i - 1];
  }
  console.log(cache[n].toString());
};

solution(input);
