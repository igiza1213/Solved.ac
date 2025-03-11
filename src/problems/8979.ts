import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[n, k], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  let ranking = arr.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    else if (b[2] !== a[2]) return b[2] - a[2];
    else return b[3] - a[3];
  });

  let index = ranking.findIndex((e) => e[0] === k);

  for (let i = 0; i < n; i++) {
    if (
      JSON.stringify(ranking[index].slice(1)) ===
      JSON.stringify(ranking[i].slice(1))
    ) {
      console.log(i + 1);
      break;
    }
  }
};

solution(input);
