import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  const func = (x: number) => {
    return arr.reduce(
      (acc, cur, i) => acc + cur * x ** (2 * n - 2 * (i + 1 - 1)),
      0
    );
  };

  const k = arr.pop()!;
  let [min, max] = [-32, 32];

  let x = 0;
  while (min <= max) {
    x = Math.floor((min + max) / 2);
    let count = func(x);

    if (count == 0) break;
    else if (count < 0) min = x + 1;
    else max = x - 1;
  }

  let dis = (x * 2) / k;

  let sum = 0;

  let a = -x;
  let b = a + dis;

  for (let i = 1; i <= k; i++) {
    let mid = (a + b) / 2;
    sum += Math.abs(dis * func(mid));

    a += dis;
    b = a + dis;
  }

  console.log(sum);
};

solution(input);
