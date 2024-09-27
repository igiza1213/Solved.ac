import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let n = Number(stdinInput.trim());

  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let [i, k] = [0, 0];
  let pos = [0, 0];
  if (!n) {
    console.log(pos.join(" "));
    return;
  }
  while (true) {
    for (let j = 1; j <= Math.floor(k / 2 + 1); j++) {
      if (i === n) {
        console.log(pos.join(" "));
        return;
      }

      pos = [pos[0] + dx[k % 4], pos[1] + dy[k % 4]];
      i++;
    }
    k++;
  }
};

solution(input);
