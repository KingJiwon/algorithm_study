function solution(name) {
  let udMove = 0;
  let lrMove = name.length - 1;

  [...name].map((el, idx) => {
    // 상/하 이동
    udMove += Math.min(
      el.charCodeAt() - "A".charCodeAt(),
      "Z".charCodeAt() - el.charCodeAt() + 1
    );
    // 좌/우 이동
    // 연속되는 A 바로 다음 index찾기
    let nextIdx = idx + 1;
    while (nextIdx < name.length && name[nextIdx] === "A") nextIdx += 1;
    // 좌우 최소 move 구하기
    lrMove = Math.min(
      lrMove,
      idx * 2 + name.length - nextIdx,
      2 * (name.length - nextIdx) + idx
    );
  });
  return udMove + lrMove;
}
// BBBAAAABBAA
