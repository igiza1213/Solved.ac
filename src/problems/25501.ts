import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

function recursion(s: string, l: number, r: number, cnt: number) {
  cnt++;
  if (l >= r) return [1, cnt];
  else if (s[l] != s[r]) return [0, cnt];
  else return recursion(s, l + 1, r - 1, cnt);
}
function isPalindrome(s: string, cnt: number) {
  return recursion(s, 0, s.length - 1, cnt);
}

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split("\n");
  let result: string[] = [];

  arr.map((value, i) => {
    result.push(isPalindrome(value, 0).join(" "));
  });

  console.log(result.join("\n"));
};

solution(input);
