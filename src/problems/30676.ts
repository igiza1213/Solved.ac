import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  let result: string;

  if (n >= 620) result = "Red";
  else if (n >= 590) result = "Orange";
  else if (n >= 570) result = "Yellow";
  else if (n >= 495) result = "Green";
  else if (n >= 450) result = "Blue";
  else if (n >= 425) result = "Indigo";
  else result = "Violet";

  console.log(result)
};

solution(input);
