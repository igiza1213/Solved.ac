import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  const func = (x: number) => {
    const t = x * x;
    let res = arr[0];
    for (let i = 1; i <= n; i++) {
      res = res * t + arr[i];
    }
    return res;
  };

  const k = arr.pop()!;

  let [min, max] = [0.0, 32.0];

  const f0 = func(min)

  for (let i = 0; i < 80; ++i) {
    const mid = (min + max) / 2;
      if (func(mid) * f0 > 0) min = mid;
      else max = mid;
      if (max - min < 1e-12) break;
  }

  const root = (min + max) / 2;

  const delta = (2 * root) / k;
  const h = k >> 1;
  let sum = 0.0;
  let mid = -root + delta / 2;

  for (let i = 0; i < h; ++i) {
    sum += Math.abs(func(mid));
    mid += delta;
  }
  const res = sum * 2 * delta;
  console.log(res.toPrecision(15));
};

solution(input);
