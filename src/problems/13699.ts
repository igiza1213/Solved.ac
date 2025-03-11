import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

let mem: bigint[] = [BigInt(1)];

function dp(n: number) {
  let ret = BigInt(0);

  if (mem[n]) ret = mem[n];
  else {
    for (let i = 0; i < n; i++) {
      ret += dp(i) * dp(n - i - 1);
    }

    mem[n] = ret;
  }
  return ret;
}

export const solution = (stdinInput: string) => {
  const n = +stdinInput.trim();

  console.log(dp(n).toString());
};

solution(input);
