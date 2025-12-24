import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, ...arr] = stdinInput.trim().split(/\s+/).map(Number);

  const LIS = (arr: number[]): number[] => {
    const pre: number[] = Array(N).fill(-1);
    const index_arr: number[] = [];
    const dp: number[] = [];

    arr.map((x, i) => {
      let l = 0;
      let r = dp.length;

      while (l < r) {
        const m = Math.floor((l + r) / 2);
        if (dp[m] < x) l = m + 1;
        else r = m;
      }

      if (l > 0) pre[i] = index_arr[l - 1];

      dp[l] = x;
      index_arr[l] = i;
    });

    let cur = index_arr[dp.length - 1];
    const ans: number[] = [];

    while (cur !== -1) {
      ans.push(cur);
      cur = pre[cur];
    }

    return ans.reverse();
  };

  const ans = LIS(arr);

  console.log(ans.length);
  console.log(ans.map((x) => arr[x]).join(" "));
};

solution(input);
