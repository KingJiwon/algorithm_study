function solution(k, dungeons) {
  //순열을 통해 던전 진행하는 모든 경우의 수 구하기
  function getPermutations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((val) => [val]);
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attatched = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attatched);
    });
    return results;
  }
  const result = [];
  const permutations = getPermutations(dungeons, dungeons.length);
  // 모든 경우에 대하여 조건에 따라 던전을 몇개 진행 할 수 있는지 구하기
  permutations.map((el, idx) => {
    let count = 0;
    fatigueLevel = k;
    el.map((el) => {
      if (el[0] <= fatigueLevel && fatigueLevel - el[1] >= 0) {
        count += 1;
        fatigueLevel -= el[1];
      }
    });
    result.push(count);
  });
  // 가장 많이 진행하는 경우를 return
  return Math.max(...result);
}
// console.log(
//   solution(80, [
//     [80, 20],
//     [50, 40],
//     [30, 10],
//   ])
// );
