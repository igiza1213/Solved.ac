import { count } from "console";
import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const func = (arr: Array<number>, n: number, cnt: number) => {
  if (cnt == n) {
    console.log(arr.join(" "));
  } else {
    for (let i = 0; i < n; i++) {
      if (arr.includes(i + 1)) continue;
      arr[cnt] = i + 1;
      func(arr, n, cnt + 1);
      arr[cnt] = 0;
    }
  }
};

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  func([...Array.from({ length: n }, () => 0)], n, 0);
};

solution(input);
