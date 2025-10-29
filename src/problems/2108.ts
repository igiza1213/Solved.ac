import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [N, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  arr.sort((a, b) => a - b);

  let avg = Math.round(arr.reduce((acc, cur) => acc + cur) / N) + 0;

  let mid = arr[arr.length >> 1];

  let range = Math.abs(arr[arr.length - 1] - arr[0]);

  const freq = new Map<number, number>();
  let maxFreq = 0;

  for (const num of arr) {
    const count = (freq.get(num) || 0) + 1;
    freq.set(num, count);
    maxFreq = Math.max(maxFreq, count);
  }

  const modes = Array.from(freq)
    .filter(([, count]) => count === maxFreq)
    .map(([num]) => num);

  const mode = modes.length === 1 ? modes[0] : modes[1];

  process.stdout.write([avg, mid, mode, range].join("\n"));
};

solution(input);
