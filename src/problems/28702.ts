import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split("\n");

  let n = 0;

  arr.map((value, i) => {
    if (!["Fizz", "Buzz", "FizzBuzz"].includes(value))
      n = Number(value) + 3 - i;
  });

  if (n % 15 === 0) console.log("FizzBuzz");
  else if (n % 3 === 0) console.log("Fizz");
  else if (n % 5 === 0) console.log("Buzz");
  else console.log(n);
};

solution(input);
