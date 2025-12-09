import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split(/\s/);

  arr.pop();

  arr.map((value) => {
    switch (value) {
      case "animal":
        console.log("Panthera tigris");
        break;
      case "flower":
        console.log("Forsythia koreana");
        break;
      case "tree":
        console.log("Pinus densiflora");
        break;
      default:
        break;
    }
  });
};

solution(input);
