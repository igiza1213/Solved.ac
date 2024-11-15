import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const datas = {
  NLCS: "North London Collegiate School",
  BHA: "Branksome Hall Asia",
  KIS: "Korea International School",
  SJA: "St. Johnsbury Academy",
};

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim()

 console.log(datas[s]);
};

solution(input);
