"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
var fs = require("fs");
var filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();
var solution = function (stdinInput) {
    var s = stdinInput.trim().toUpperCase();
    var charMap = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        charMap[char] != undefined ? charMap[char]++ : (charMap[char] = 1);
    }
    var count = 0;
    var result = "";
    for (var char in charMap) {
        if (charMap[char] > count) {
            count = charMap[char];
            result = char;
        }
        else if (charMap[char] === count) {
            result = "?";
        }
    }
    console.log(result);
};
exports.solution = solution;
(0, exports.solution)(input);
