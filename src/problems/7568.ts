import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split("\n");

  const men = arr.map((value) => ({
    weight: +value.split(" ")[0],
    height: +value.split(" ")[1],
    rank: 1,
  }));

  for (let i = 0; i < men.length; i++) {
    for (let j = 0; j < men.length; j++) {
      if (
        i !== j &&
        men[i].weight < men[j].weight &&
        men[i].height < men[j].height
      )
        men[i].rank++;
    }
  }
  console.log(men.map((v) => v.rank).join(" "));
};

solution(input);
