import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const datas = {
  Algorithm: "204",
  DataAnalysis: "207",
  ArtificialIntelligence: "302",
  CyberSecurity: "B101",
  Network: "303",
  Startup: "501",
  TestStrategy: "105",
};

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/);
  console.log(arr.map((value) => datas[value]).join("\n"));
};

solution(input);
