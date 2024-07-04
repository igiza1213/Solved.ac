import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split(" ").map(Number);

  const result = arr.filter((value, i) =>
    i !== 0 ? value === arr[i - 1] - 1 || value === arr[i - 1] + 1 : true
  );

  console.log(
    result.length === 8
      ? result[0] === 8
        ? "descending"
        : "ascending"
      : "mixed"
  );
};

solution(input);
