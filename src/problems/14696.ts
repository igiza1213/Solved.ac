import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const result: string[] = [];
export const solution = (stdinInput: string) => {
  const [t, ...arr] = stdinInput.trim().split("\n");

  for (let i = 0; i < +t; i++) {
    const [[a, ...aArr], [b, ...bArr]] = [
      arr[i * 2].split(/\s/).map(Number),
      arr[i * 2 + 1].split(/\s/).map(Number),
    ];

    const [aObj, bObj] = [
      aArr.reduce((a, i) => ((a[i] = (a[i] || 0) + 1), a), {
        "4": 0,
        "3": 0,
        "2": 0,
        "1": 0,
      }),
      bArr.reduce((a, i) => ((a[i] = (a[i] || 0) + 1), a), {
        "4": 0,
        "3": 0,
        "2": 0,
        "1": 0,
      }),
    ];

    switch (true) {
      case aObj["4"] > bObj["4"]:
        console.log("A");
        break;
      case aObj["4"] < bObj["4"]:
        console.log("B");
        break;
      case aObj["3"] > bObj["3"]:
        console.log("A");
        break;
      case aObj["3"] < bObj["3"]:
        console.log("B");
        break;
      case aObj["2"] > bObj["2"]:
        console.log("A");
        break;
      case aObj["2"] < bObj["2"]:
        console.log("B");
        break;
      case aObj["1"] > bObj["1"]:
        console.log("A");
        break;
      case aObj["1"] < bObj["1"]:
        console.log("B");
        break;
      default:
        console.log("D");
    }
  }
};

solution(input);
