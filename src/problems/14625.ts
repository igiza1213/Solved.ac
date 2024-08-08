import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [stt_h, stt_m, end_h, end_m, s] = stdinInput.trim().split(/\s/);

  let cur_h: number = Number(stt_h);
  let cur_m: number = Number(stt_m);
  let cnt = 0;

  while (true) {
    if (
      cur_h % 10 === Number(s) ||
      Math.floor(cur_h / 10) === Number(s) ||
      cur_m % 10 === Number(s) ||
      Math.floor(cur_m / 10) === Number(s)
    ) {
      cnt++;
    }

    if (cur_h === Number(end_h) && cur_m === Number(end_m)) {
      break;
    }

    cur_m++;

    if (cur_m === 60) {
      cur_m = 0;
      cur_h += 1;
    }
  }

  console.log(cnt);
};

solution(input);
