function solution(genres, plays) {
  const uniqueGenre = genres.filter((element, index) => {
    return genres.indexOf(element) === index;
  });
  const arr = genres.map((el, idx) => ({
    genre: el,
    playcount: plays[idx],
    uniqueNum: idx,
  }));
  console.log(arr);

  const arr2 = uniqueGenre.map((uniqueGenre, idx) => {
    const arr3 = arr.filter((el) => el.genre === uniqueGenre);
    arr3.sort((a, b) => {
      if (b.playcount === a.playcount) {
        b.uniqueNum - a.uniqueNum;
      } else {
        return b.playcount - a.playcount;
      }
    });
    console.log(arr3);
    return arr3;
  });

  const arr4 = arr2.map((el, idx) => {
    return [el[0].uniqueNum, el[1].uniqueNum];
  });
  console.log(arr4);
}
solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
//  [{
//   장르,
//   플레이횟수,
//   고유번호,
// },
//  {
//   2: 600,
//   5: 2500,
// }];
// 클래식인것만 골라서 정렬 해서 위에 유니크 넘버 두개 뽑고
// 다음 -- 두개뽑고
// 총합 비교해서 순서대로 push
// 장르별로 count 높은 고유번호 2개 정렬하기
// 두개의 총합 비교해서 높은것부터 넣기
