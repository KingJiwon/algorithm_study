const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let info = [];
let cave = [];
let count = 0;
rl.on("line", (line) => {
  if (count === 0) {
    info = line.split(" ").map((el) => parseInt(el));
    count = info[0];
    return;
  }
  cave.push(parseInt(line));
  if (count === 1) {
    rl.close();
  }
  count -= 1;
});

rl.on("close", () => {
  let bottom = new Array(info[1] + 1).fill(0);
  let top = new Array(info[1] + 1).fill(0);
  cave.forEach((val, idx) => {
    //길이별로 석순, 종유석 몇 개 있는지 나누기
    if (idx % 2 === 0) {
      bottom[parseInt(val)]++; //길이별로 석순 배열  index 1부터 바닥
    } else {
      top[info[1] - parseInt(val) + 1]++; //길이별로 종유석 배열(반대방향)
    }
  });

  for (let i = 1; i <= info[1]; i += 1) {
    // 누적합으로 석순/종유석 각각 구간마다 몇개 부딫히는지 구하기
    bottom[info[1] - i] += bottom[info[1] - i + 1]; //뒤에서부터 누적합 구하기(석순)
    top[i] += top[i - 1]; // 앞에서부터 부분합 구하기 (종유석)
  }
  let min = 2000000;
  let cnt = 0;
  for (let i = 1; i <= info[1]; i++) {
    // 석순 + 종유석 충돌수로 최솟값과 카운트 구하기
    if (top[i] + bottom[i] < min) {
      cnt = 1;
      min = top[i] + bottom[i];
    } else if (top[i] + bottom[i] === min) {
      cnt += 1;
    }
  }
  console.log(min, cnt);
  process.exit();
});
