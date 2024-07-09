import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" "));

  const queue: number[] = [];
  const result: number[] = [];

  arr.map((line) => {
    switch (line[0]) {
      case "push":
        queue.push(parseInt(line[1]));
        break;
      case "pop":
        result.push(queue.shift() || -1);
        break;
      case "size":
        result.push(queue.length);
        break;
      case "empty":
        result.push(queue[0] ? 0 : 1);
        break;
      case "front":
        result.push(queue[0] || -1);
        break;
      case "back":
        result.push(queue[queue.length - 1] || -1);
        break;
    }
  });

  console.log(result.join("\n"));
};

solution(input);
