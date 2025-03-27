import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

function factorial(num: number) {
  var value = BigInt(1);
  for (let i = BigInt(2); i <= num; i++) value = value * i;
  return value;
}

export const solution = (stdinInput: string) => {
  const N = +stdinInput.trim();

  let result = 0;

  for (let i = 2; i <= N; i++) {
    let n = i;
    while (n % 5 === 0) {
      n /= 5;
      result++;
    }
  }

  console.log(result);
};

solution(input);
