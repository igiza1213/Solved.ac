import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim().toUpperCase();
  const charMap = {};

  for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
    const char = s_1[_i];
    charMap[char] != undefined ? charMap[char]++ : (charMap[char] = 1);
  }

  let count = 0;
  let result = "";

  for (const char in charMap) {
    if (charMap[char] > count) {
      count = charMap[char];
      result = char;
    } else if (charMap[char] === count) {
      result = "?";
    }
  }
  console.log(result);
};

solution(input);
