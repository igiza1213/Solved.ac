import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const T = BigInt(10007);

const bino_coaf = (n: number, k: number): bigint => {
  let cache = Array.from({ length: n + 1 }, () =>
    Array(k + 1)
      .fill(0)
      .map(BigInt)
  );

  for (let i = 0; i < n + 1; i++) {
    cache[i][0] = BigInt(1);
  }
  for (let i = 0; i < k + 1; i++) {
    cache[i][i] = BigInt(1);
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < k + 1; j++) {
      cache[i][j] = ((cache[i - 1][j] % T) + (cache[i - 1][j - 1] % T)) % T;
    }
  }

  return cache[n][k];
};

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput.trim().split(" ").map(Number);
  console.log(bino_coaf(a, b).toString());
};

solution(input);
