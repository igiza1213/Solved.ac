// LIST + FILO = STACK
// L + F + (Carry, 1) >= 10, (S)>= 1

// 우변 탐색 x
// 6개가 0 ~ F 까지 볼때 경우의수
// 인데 완전탐색을 못하겠음;;
// 순열은 구했지만 완전탐색을 못함;;

/*
// L, I, S, T, F, O
let arr = ["0", "0", "0", "0", "0", "0"];

for (let i = 1; i <= 16777215; i++) {
  arr = i.toString(16).padStart(6, "0").split("");

  if (arr[0] === "0" || arr[4] === "0" || new Set(arr).size !== arr.length)
    continue;

  const str1 = `${arr[0]}${arr[1]}${arr[2]}${arr[3]}`;
  const str2 = `${arr[4]}${arr[1]}${arr[0]}${arr[5]}`;
  const str3 = (parseInt(str1, 16) + parseInt(str2, 16)).toString(16);
  str3.length > 4 &&
    arr[2] === str3[0] &&
    arr[3] === str3[1] &&
    new Set(arr.concat(str3.slice(2, 5).split(""))).size === 9 &&
    process.stdout.write(`${str1} + ${str2} = ${str3}` + "\n");
}
*/

/*
// test용
let a = [0, 0, 0, 0, 0, 0, 0, 0, 0],
  t1 = 0,
  t2 = 0,
  t3 = 0;
a[0] = 1;

for (a[1] = 2; a[1] < 16; ++a[1]) {
  for (a[2] = 0; a[2] < 16; ++a[2]) {
    for (a[3] = 0; a[3] < 16; ++a[3]) {
      for (a[4] = 0; a[4] < 16; ++a[4]) {
        (a[5] = (a[3] + a[4]) % 16), (t1 = Math.floor((a[3] + a[4]) / 16));
        (a[6] = (t1 + 1 + a[1]) % 16), (t2 = Math.floor((t1 + 1 + a[1]) / 16));
        (a[7] = (t2 + 2 * a[2]) % 16), (t3 = Math.floor((t2 + 2 * a[2]) / 16));
        a[8] = 16 - t3 + a[3] - a[1];
        if (a[8] <= 0 || a[8] > 15) continue;

        let f = 1;
        for (let i = 0; i < 9; ++i)
          for (let j = i + 1; j < 9; ++j) if (a[i] == a[j]) f = 0;

        if (f)
          process.stdout.write(
            `${a[1].toString(16)}${a[2].toString(16)}1${a[3].toString(
              16
            )} + ${a[8].toString(16)}${a[2].toString(16)}${a[1].toString(
              16
            )}${a[4].toString(16)} = 1${a[3].toString(16)}${a[7].toString(
              16
            )}${a[6].toString(16)}${a[5].toString(16)}\n`
          );
      }
    }
  }
}
*/