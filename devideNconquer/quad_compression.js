function solution(arr) {
  const length = arr.length;
  const answer = [0, 0];

  function devide(arr, length) {
    if (length === 1) {
      return answer[arr[0][0]]++;
    } // 나눈 길이가 1이되면 (최대로 나누면) 해당 answer배열의 해당 값에 +1

    let sum = arr.reduce((acc, v) => acc + v.reduce((a, b) => a + b, 0), 0);
    // 영역의 총 합 구하기
    if (sum === 0 || sum === length * length) {
      return answer[arr[0][0]]++; // 영역의 합이 0 이거나 길이의제곱(모두1)일때 -> 영역들의 값이 모두 같을 때 answer 배열의 해당 값에 +1
    } else {
      // 나눌 수 있으면 영역을 4분할 하기
      devide(
        arr.slice(0, length / 2).map((val) => val.slice(0, length / 2)),
        length / 2
      );
      devide(
        arr.slice(0, length / 2).map((val) => val.slice(length / 2)),
        length / 2
      );
      devide(
        arr.slice(length / 2).map((val) => val.slice(0, length / 2)),
        length / 2
      );
      devide(
        arr.slice(length / 2).map((val) => val.slice(length / 2)),
        length / 2
      );
    }
  }

  devide(arr, length);
  return answer;
}
