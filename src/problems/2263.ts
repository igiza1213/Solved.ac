import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

function recur(
  inLeft: number,
  inRight: number,
  postLeft: number,
  postRight: number,
  postOder: number[]
) {
  if (inLeft > inRight || postLeft > postRight) return [];
  const root = postOder[postRight];
  const rootIdx = map.get(root)!;
  const leftSize = rootIdx - inLeft;

  result.push(root);

  recur(inLeft, rootIdx - 1, postLeft, postLeft + leftSize - 1, postOder);
  recur(rootIdx + 1, inRight, postLeft + leftSize, postRight - 1, postOder);
}

const result: number[] = [];
const map = new Map<number, number>();

export const solution = (stdinInput: string) => {
  const [[N], ...[inOrder, postOder]] = stdinInput
    .trim()
    .split("\n")
    .map((value) => value.split(" ").map(Number));

  inOrder.map((value, i) => map.set(value, i));

  recur(0, N - 1, 0, N - 1, postOder);

  console.log(...result);
};

solution(input);
