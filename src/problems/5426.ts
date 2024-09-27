import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [n, ...arr] = stdinInput.trim().split("\n");

  arr.map((value) => {
    const list = value.split("");
    const m = Math.sqrt(value.length);
    let array: string[][] = [];
    for (let i = 0; i < m; i++) {
      array = [...array, list.slice(m * i, m * i + m).reverse()];
    }

    let result = "";

    for (let i = 0; i < array.length; i++) {
      result += array.map((value) => value[i]).join("");
    }
    console.log(result);
  });
};

solution(input);
