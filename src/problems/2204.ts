import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let arr = stdinInput.trim().split("\n");

  arr.pop();

  arr.map((value, i) => {
    if (!isNaN(+value)) {
      const list = arr.slice(i + 1, i + +value + 1);

      list.sort((a, b) => {
        const upperCaseA = a.toUpperCase();
        const upperCaseB = b.toUpperCase();

        if (upperCaseA > upperCaseB) return 1;
        if (upperCaseA < upperCaseB) return -1;
        return 0;
      });

      console.log(list[0]);
    }
  });
};

solution(input);
