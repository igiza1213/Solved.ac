import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(BigInt);

  arr.sort((a, b) => Number(a - b));

  let result: bigint = BigInt(0);

  for (let i = 1; i < n; i++) {
    result += (arr[i] - arr[i - 1]) * BigInt(i) * (n - BigInt(i));
  }

  console.log((result * BigInt(2)).toString());

  //  아래 방법은 O(n^2/2) 이기에 시간초과가 난다
  //   let result = BigInt(0);
  //   arr.map((value, i) => {
  //     for (let index = i + 1; index < n; index++) {
  //       result += abs(value - arr[index]);
  //     }
  //   });

  //   console.log((result * BigInt(2)).toString());
};

solution(input);
