const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let paintings_matrix = [];
let paintings = [];
let count = 0;
let countedPainting = 0;
let countedArea = [];

rl.on("line", (line) => {
  if (count === 0) {
    paintings_matrix = line.split(" ").map((el) => parseInt(el));
    count = -paintings_matrix[0];
    return;
  }
  paintings.push(line.split(" ").map((el) => parseInt(el)));
  if (count === -1) {
    rl.close();
  }
  count += 1;
});

rl.on("close", () => {
  const visited = Array.from(
    Array(Array(paintings_matrix[6]), () =>
      Array(paintings_matrix[5]).fill(false)
    )
  ); //방문 배열 생성
  const direction = [
    [1, 0], //하
    [-1, 0], //상
    [0, -1], //좌
    [0, 1], // 우
  ];

  function bfs(start) {
    let queue = [start];
    console.log(queue);
    let area = 0; //영역넓이 카운트
    while (queue.length) {
      let [y, x] = queue.shift();
      if (visited[y][x]) continue;
      visited[y][x] = true;
      area += 1;
      for (let i = 0; i < direction.length; i += 1) {
        //상하좌우 탐색
        let [dy, dx] = [y + direction[i][0], x + direction[i][1]];
        if (
          dx < 0 ||
          dy < 0 ||
          dx > paintings_matrix[0] ||
          dy > paintings_matrix[1] ||
          visited[dy][dx]
        ) {
          // 좌표가 0보나 작거나 최대 좌표보다 클 때 (도화지에서 벗어날때), 방문한 좌표일 때
          continue;
        }
        if (paintings[dy][dx] === 1) {
          queue.push([dy, dx]);
        }
      }
    }
    if (area !== 0) {
      //영역의 넓이가 0 이 아니면(그림이 있으면)
      countedPainting += 1;
      countedArea.push(area);
    }
  }

  for (let i = 0; i < paintings_matrix[0]; i += 1) {
    for (let j = 0; j < paintings_matrix[1]; j += 1) {
      if (!visited[i][j] && paintings[i][j] === 1) {
        bfs([i, j]); // 방문한적 없고 1이면(그림이 있으면) bfs실행
      }
    }
  }
  console.log(paintings);
  console.log(paintings_matrix);
  console.log(visited);
  console.log(countedPainting);
  console.log(Math.max(...countedArea));
  process.exit();
});
