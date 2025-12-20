import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

interface Node<T> {
  left: T;
  right: T;
}

export const solution = (stdinInput: string) => {
  const [N, ...arr] = stdinInput
    .split("\n")
    .map((value) => value.trim().split(" ").map(Number));

  const tree = new Map<number, Node<number>>();
  const children = new Set<number>();

  for (const [value, left, right] of arr) {
    const node = tree.set(value, { left, right });
    if (left !== -1) children.add(left);
    if (right !== -1) children.add(right);
  }

  let root = 0;
  for (const key of tree.keys()) {
    if (!children.has(key)) {
      root = key;
      break;
    }
  }

  let x = 0;
  const minX = new Map<number, number>();
  const maxX = new Map<number, number>();

  function inOrder(node: number, depth: number) {
    if (node === -1) return;

    const { left, right } = tree.get(node)!;

    inOrder(left, depth + 1);

    x++;
    if (!minX.has(depth)) {
      minX.set(depth, x);
      maxX.set(depth, x);
    } else {
      minX.set(depth, Math.min(minX.get(depth)!, x));
      maxX.set(depth, Math.max(maxX.get(depth)!, x));
    }

    inOrder(right, depth + 1);
  }

  inOrder(root, 1);

  let answerDepth = 1;
  let answerWidth = 1;

  for (const [depth, left] of minX.entries()) {
    const right = maxX.get(depth)!;
    const width = right - left + 1;

    if (width === answerWidth) {
      if (depth < answerDepth) {
        answerDepth = depth;
        answerWidth = width;
      }
    } else if (width > answerWidth) {
      answerWidth = width;
      answerDepth = depth;
    }
  }

  console.log(answerDepth, answerWidth);
};

solution(input);
