import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

//매개 변수 탐색

export const solution = (stdinInput: string) => {
  const [k, n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  arr.sort();

  let [min, max] = [1, Math.max(...arr)];

  if (max === 0) {
    console.log(0);
    return;
  }

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    let count = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

    if (count >= n) min = mid + 1;
    else max = mid - 1;
  }

  console.log(max);
};

solution(input);
