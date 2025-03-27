import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[N], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  let dots: number[][] = arr.slice(0, N);
  let result: number[] = [];

  const [M] = arr[N];

  for (let i = N + 1; i < M + N + 1; i++) {
    let count = 0;
    let [x0, y0, z0, r] = arr[i];
    dots.map(([x1, y1, z1]) => {
      if (Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2 + (z1 - z0) ** 2) <= r)
        count++;
    });
    result.push(count);
  }

  console.log(result.join("\n"));
};

solution(input);
