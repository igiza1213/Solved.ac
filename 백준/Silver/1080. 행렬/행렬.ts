import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let arr = stdinInput.trim().split("\n");

  let [n, m] = arr.shift()?.split(" ").map(Number)!;

  let newArr = arr.map((item) => item.split("").map(Number));

  let a = newArr.slice(0, n);
  //   JSON.parse(JSON.stringify(a));
  let b = newArr.slice(n);

  //   console.log(n, m, newArr, a, b);

  let count = 0;

  for (let y = 0; y < +n; y++) {
    for (let x = 0; x < +m; x++) {
      if (a[y][x] !== b[y][x] && y + 3 <= n && x + 3 <= m) {
        count++;
        for (let iy = y; iy < y + 3; iy++) {
          for (let ix = x; ix < x + 3; ix++) {
            a[iy][ix] = a[iy][ix] ? 0 : 1;
          }
        }
      }
    }
  }
  const equals = <T>(a: T, b: T) => JSON.stringify(a) === JSON.stringify(b);

  if (!equals(a, b)) {
    console.log(-1);
  } else {
    console.log(count);
  }
};

solution(input);
