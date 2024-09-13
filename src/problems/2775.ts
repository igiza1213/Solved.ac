import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

// 3층 1 5 15 35 70
// 2층 1 4 10 20 35
// 1층 1 3 6 10 15
// 0층 1 2 3 4 5

// 1 + 0, (k+2)/1, (k+3)/2 (k+4)/3, (k+5)/4

export const solution = (stdinInput: string) => {
  const [T, ...arr] = stdinInput.trim().split("\n").map(Number);

  arr.map((k, i) => {
    if (!(i % 2)) {
      const n = arr[i + 1];
      let ans = 1;

      if (n === 1) {
        console.log(1);
      } else {
        for (let j = 0; j < n - 1; j++) {
          ans *= (k + j + 2) / (j + 1);
        }
        console.log(ans.toFixed());
      }
    }
  });
};

solution(input);
