import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const s = stdinInput.trim();
  let [M,O,B,I,S] = [false,false,false,false,false]
  let result = ""
  s.split("").map((value) => {
    if (value == "M") {
      M = true;
    } else if (value == "O") {
      O = true;
    } else if (value == "B") {
      B = true;
    } else if (value == "I") {
      I = true;
    } else if (value == "S") {
      S = true;
    }
  });

   if (M == true && O == true && B == true && I == true && S == true) {
     result = "YES";
   } else {
     result = "NO";
   }

   console.log(result)
};

solution(input);
