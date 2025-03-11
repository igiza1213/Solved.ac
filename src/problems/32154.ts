import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const board = [
  ["11", "A B C D E F G H J L M"],
  ["9", "A C E F G H I L M"],
  ["9", "A C E F G H I L M"],
  ["9", "A B C E F G H L M"],
  ["8", "A C E F G H L M"],
  ["8", "A C E F G H L M"],
  ["8", "A C E F G H L M"],
  ["8", "A C E F G H L M"],
  ["8", "A C E F G H L M"],
  ["8", "A B C F G H L M"],
];

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());
  console.log(board[n - 1][0]);
  console.log(board[n - 1][1]);
};

solution(input);
