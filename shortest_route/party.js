const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
let count = 1;
let n = 0, //n 명의 학생
  m = 0, // m개의 단방향 도로
  x = 0; // x번 마을에서 파티

function dijkstra(graph) {
  // return(distance) - 파티까지. 집까지 최단거리
  const queue = [];
  const distance = new Array(n + 1).fill(Infinity); //거리가 infinity인 n+1개의 배열 생성 ,
  // 각각 집에서 2번집까지 최단거리, 2번집에서 각각 집까지 최단거리
  queue.push([x, 0]);
  distance[x] = 0;
  while (queue.length > 0) {
    const [start, cost] = queue.shift();
    for (let i = 0; i < graph[start].length; i += 1) {
      const [v, c] = graph[start][i];
      if (distance[v] > cost + c) {
        distance[v] = cost + c;
        queue.push([v, distance[v]]);
      }
    }
  }
  return distance;
}

rl.on("line", (line) => {
  if (count === 1) {
    [n, m, x] = line.split(" ").map((val) => parseInt(val));
    count = -m;
    return;
  }
  count += 1;
  inputs.push(line.split(" ").map((val) => parseInt(val)));
  if (count === 0) rl.close();
});

rl.on("close", () => {
  const goGraph = Array.from(Array(n + 1), () => new Array()); //n+1개의 2차원 배열생성 [[[2,4],[3,2],[4,7]],[[1,1,3,5]],[~~],[~~],[]]
  const backGraph = Array.from(Array(n + 1), () => new Array());
  for (let i = 0; i < m; i++) {
    const [start, end, cost] = inputs[i]; //입력값을 돌며 시작점 , 끝점, 거리 추출
    goGraph[start].push([end, cost]); // 파티 갈 때 거쳐야 할 노드 모든 경우
    backGraph[end].push([start, cost]); // 집에갈 때 거쳐야 할 노드 모든 경우
  }

  const goDistnace = dijkstra(goGraph);
  console.log(goDistnace);
  const backDistance = dijkstra(backGraph);
  console.log(backDistance);

  let max = 0;
  for (let i = 1; i <= n; i++) {
    const sum = backDistance[i] + goDistnace[i];
    max = Math.max(max, sum);
  }

  console.log(max);
  process.exit();
});
