import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, M, ...arr] = stdinInput.trim().split(/\s/);

  const [n, m] = [Number(N), Number(M)];
  const lines = ["WBWBWBWB", "BWBWBWBW"];

  let min = 64;
  let count: number;

  // 8*8 자르기
  for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
      // 시작 B와 W고려
      for (let k = 0; k < 2; k++) {
        count = 0;
        // 좌상단부터 8*8 탐색
        for (let x = i; x < i + 8; x++) {
          for (let y = j; y < j + 8; y++) {
            if (arr[x][y] !== lines[(x + k) % 2][y - j]) {
              count++;
            }
          }
        }
        if (min > count) min = count;
      }
    }
  }
  console.log(min);
};

solution(input);
