import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

function factorial(num: number) {
  var value = BigInt(1);
  for (let i = BigInt(2); i <= num; i++) value = value * i;
  return value;
}
export const solution = (stdinInput: string) => {
  const [t, ...arr] = stdinInput.trim().split("\n").map(Number);
  arr.map((n) => {
    const fac = factorial(n).toString().split("").reverse();

    for (let i = 0; i < fac.length; i++) {
      if (fac[i] != "0") {
        console.log(fac[i]);
        break;
      }
    }
  });
};

solution(input);
