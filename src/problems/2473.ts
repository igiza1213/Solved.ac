import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s+/).map(Number);

  arr.sort((a, b) => a - b);

  let res = Infinity;
  let ans = "";

  for (let i = 0; i < n; i++) {
    let [k, l, r] = [i, i + 1, n - 1];

    while (l < r) {
      let t = arr[k] + arr[l] + arr[r];
      let a = Math.abs(t);
      res = Math.min(a, res);
      if (a === res) {
        ans = `${arr[k]} ${arr[l]} ${arr[r]}`;
      }

      if (t < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  console.log(ans);
};

solution(input);
