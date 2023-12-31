const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
let info = [];
let numbers = [];
let sections = [];
let sumArr = [0];
let solution = [];
rl.on("line", (line) => {
  if (count === 0) {
    info = line.split(" ").map((el) => parseInt(el));
    count = 1;
    return;
  }
  if (count === 1) {
    numbers = line.split(" ").map((el) => parseInt(el));
    count = -info[1];
    return;
  }
  sections.push(line.split(" ").map((el) => parseInt(el)));
  if (count === -1) {
    rl.close();
  }
  count += 1;
});

rl.on("close", () => {
  numbers.forEach((val, idx) => {
    sumArr[idx + 1] = sumArr[idx] + val; //숫자들의 누적합 배열 만들기.
  });
  for (let i = 0; i < info[1]; i++) {
    solution.push(sumArr[sections[i][1]] - sumArr[sections[i][0] - 1]); // 누적합 끼리(end - (start-1)) 빼면 구간별 합이 나옴.
  }
  console.log(solution.join("\n"));
  process.exit();
});
