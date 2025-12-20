import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const priority = (op: string): number => {
  if (op === "+" || op === "-") return 1;
  if (op === "*" || op === "/") return 2;
  return 0;
};

export const solution = (stdinInput: string) => {
  const S = stdinInput.trim().split("");

  let result = "";
  const stack: string[] = [];

  for (const ch of S) {
    if ("A" <= ch && ch <= "Z") result += ch;
    else if (ch === "(") stack.push(ch);
    else if (ch === ")") {
      while (stack.length && stack[stack.length - 1] !== "(")
        result += stack.pop();
      stack.pop();
    } else {
      while (stack.length && priority(stack[stack.length - 1]) >= priority(ch))
        result += stack.pop();
      stack.push(ch);
    }
  }

  while (stack.length) {
    result += stack.pop();
  }

  console.log(result);
};

solution(input);
