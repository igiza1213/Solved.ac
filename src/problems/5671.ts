import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map((v) => +v));

  const result = arr.map(
    ([min, max], _) =>
      Array.from({ length: max - min + 1 }, (_, i) => i + min).filter(
        (value) => {
          const str = value.toString();
          for (let i = 0; i < str.length; i++) {
            if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
              return false;
            }
          }
          return true;
        }
      ).length
  );

  console.log(result.join("\n"));
};

solution(input);
