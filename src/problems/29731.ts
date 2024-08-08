import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  try {
    const arr = stdinInput.trim().split("\n");

    arr.shift();

    const list = [
      "Never gonna give you up",
      "Never gonna let you down",
      "Never gonna run around and desert you",
      "Never gonna make you cry",
      "Never gonna say goodbye",
      "Never gonna tell a lie and hurt you",
      "Never gonna stop",
    ];

    arr.map((value) => {
      if (list.includes(value)) {
      } else {
        console.log("Yes");
        throw new Error();
      }
    });

    console.log("No");
  } catch (error) {}
};

solution(input);
