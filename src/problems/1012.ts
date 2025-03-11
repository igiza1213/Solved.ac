import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[t], ...matrix] = stdinInput
    .trim()
    .split("\n")
    .map((value) => value.split(" ").map(Number));

  console.log(t, matrix);

  let sett = 0;

  for (let _ = 0; _ < t; _++) {
    let [m, n, k] = matrix[sett];
    console.log(m, n, k);

    let arr = Array.from(new Array(n), () => new Array(m).fill(0));

    for (let a = sett + 1; a <= sett + k; a++) {
      let [x, y] = matrix[a];
      arr[y][x] = 1;
    }

    console.log(arr.map((value) => value.join(" ")).join("\n"));

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {}
    }
    sett += k + 1;
  }
};

solution(input);
