import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export class Node<T> {
  value: T;
  left: Node<T> | null = null;
  right: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class Tree<T> {
  nodes: Map<T, Node<T>> = new Map();

  addNode(value: T) {
    if (!this.nodes.has(value)) {
      this.nodes.set(value, new Node(value));
    }
    return this.nodes.get(value)!;
  }

  preOrder(node: Node<T> | null): T[] {
    if (!node) return [];
    return [
      node.value,
      ...this.preOrder(node.left),
      ...this.preOrder(node.right),
    ];
  }

  inOrder(node: Node<T> | null): T[] {
    if (!node) return [];
    return [
      ...this.inOrder(node.left),
      node.value,
      ...this.inOrder(node.right),
    ];
  }

  postOrder(node: Node<T> | null): T[] {
    if (!node) return [];
    return [
      ...this.postOrder(node.left),
      ...this.postOrder(node.right),
      node.value,
    ];
  }
}

export const solution = (stdinInput: string) => {
  const [N, ...arr] = stdinInput
    .split("\n")
    .map((value) => value.trim().split(" "));

  const tree = new Tree<string>();

  for (const [value, left, right] of arr) {
    const node = tree.addNode(value);
    if (left !== ".") node.left = tree.addNode(left);
    if (right !== ".") node.right = tree.addNode(right);
  }

  const root = tree.nodes.get("A")!;

  console.log(tree.preOrder(root).join(""));
  console.log(tree.inOrder(root).join(""));
  console.log(tree.postOrder(root).join(""));
};

solution(input);
