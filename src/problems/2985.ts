import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split(" ").map(Number);

  ["+", "-", "/", "*"].map((value) => {
    if (eval(arr[0] + value + arr[1]) == arr[2])
      console.log(arr[0] + value + arr[1] + "=" + arr[2]);

    if (arr[0] == eval(arr[1] + value + arr[2]))
      console.log(arr[0] + "=" + arr[1] + value + arr[2]);
  });
};

solution(input);
