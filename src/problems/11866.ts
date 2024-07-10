import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, k] = stdinInput.trim().split(" ").map(Number);

  const arr = Array.from({ length: n }, (_, i) => i + 1);

  const result: number[] = []; // 정답 배열
  let index = -1; // arr의 인덱스 포인터
  let i: number; // 전체 회수 (회수 증가하면서 k 나머지 구하기용)

  for (i = 1; result.length !== n; i++) {
    index++;

    if (i % k === 0) {
      result.push(arr[index]);
      arr.splice(index, 1);
      index--;
    }
    if (index === arr.length - 1) {
      index = -1;
    }
  }

  console.log("<" + result.join(", ") + ">");
};

solution(input);
