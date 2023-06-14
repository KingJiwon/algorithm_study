function solution(progresses, speeds) {
  const requiredTime = progresses.map((el, idx) =>
    Math.ceil((100 - el) / speeds[idx])
  );
  let answerArr = [];
  for (let i = 0; i < 100; i++) {
    if (requiredTime.length === 0) {
      break;
    }
    let count = 0;
    for (let j = 0; j < requiredTime.length; j++) {
      if (requiredTime[j] > requiredTime[0]) {
        break;
      }
      count += 1;
    }
    for (let k = 0; k < count; k++) {
      requiredTime.shift();
    }
    answerArr.push(count);
  }
  return answerArr;
}
