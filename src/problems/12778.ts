import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" "));

  const dArr = arr.reduce((acc: string[][][], value, i) => {
    if (i % 2 === 0 && arr[i + 1]) {
      acc.push([value, arr[i + 1]]);
    }
    return acc;
  }, []);

  console.log(
    dArr
      .map(([[M, f], [...arr]]) =>
        arr
          .map((value) =>
            f === "C"
              ? value.charCodeAt(0) - 64
              : String.fromCharCode(+value + 64)
          )
          .join(" ")
      )
      .join("\n")
  );
};

solution(input);
