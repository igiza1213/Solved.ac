import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a,b,c] = stdinInput.trim().split(/\s/).map(Number);
  const sum = a+b+c
  if (sum != 180)
    console.log("Error")
  else if (a==b && b==c)
    console.log("Equilateral")
  else if(a==b || b==c || c==a)
    console.log("Isosceles")
  else
    console.log("Scalene")
};

solution(input);
