import fs = require("fs");
var input = fs.readFileSync(0, "utf-8").toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/);

  const string = arr.join(" ");

  let state = true;

  for (let i = 0; state; i++) {
    state = string.includes(i.toString().split("").join(" "));
    if (!state) {
      console.log(i);
    }
  }
};

solution(input);
