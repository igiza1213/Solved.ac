import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[a, b, c], [n], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  // console.log(a, b, c, n, arr);

  let result: number[] = [];
  for (let i = 0; i < n * 3; i += 3) {
    result.push(
      [arr[i], arr[i + 1], arr[i + 2]].reduce(
        (pre, cur) =>
          pre +
          cur.reduce(
            (n_pre, n_cur, n_idx) =>
              n_pre +
              (n_idx == 0 ? n_cur * a : n_idx == 1 ? n_cur * b : n_cur * c),
            0
          ),
        0
      )
    );
  }

  console.log(Math.max(...result));
};

solution(input);
