function solution(NumOfChild, childArr) {
  const dp = new Array(NumOfChild).fill(1); // 각 인덱스 까지 연속적으로 커지는 번호를 가진 아이들의 인원
  // childArr - 3 7 5 2 6 1 4
  // dp       - 1 2 2 1 3 1 2
  for (let i = 1; i < NumOfChild; i++) {
    let cnt = 0;
    for (let j = 0; j < i; j++) {
      if (childArr[j] < childArr[i]) cnt = Math.max(cnt, dp[j]);
    }
    dp[i] = cnt + 1;
  }
  console.log(dp);
  console.log(NumOfChild - Math.max(...dp));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let NumOfChild = 0;
const childArr = [];
rl.on("line", (line) => {
  if (count === 0) {
    NumOfChild = parseInt(line);
    count += 1;
    return;
  }
  childArr.push(parseInt(line));
  if (count === NumOfChild) rl.close();
  count += 1;
});

rl.on("close", () => {
  solution(NumOfChild, childArr);
  process.exit();
});
