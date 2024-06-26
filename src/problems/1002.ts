import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [range, ...testCases] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  for (let i = 0; i < range[0]; i++) {
    let [x1, y1, r1, x2, y2, r2] = testCases[i];

    const dx = x2 - x1;
    const dy = y2 - y1;
    const distanceSquared = dx * dx + dy * dy;
    const distance = Math.sqrt(distanceSquared);
    const Sradius = r1 + r2;
    const Dradius = Math.abs(r1 - r2);

    if (distance === 0 && r1 === r2) {
      console.log(-1); // 두 원이 동일한 경우
    } else if (distance === Sradius || distance === Dradius) {
      console.log(1); // 두 원이 외접하거나 내접하는 경우
    } else if (distance < Dradius || distance > Sradius) {
      console.log(0); // 두 원이 서로 떨어져 있는 경우
    } else {
      console.log(2); // 두 원이 두 점에서 만나는 경우
    }
  }
};

solution(input);
