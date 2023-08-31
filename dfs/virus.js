const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let countedComputer = 0;
let countedLink = 0;
const virusMatrix = [];
let count = 0;
let answer = 0;

rl.on("line", (line) => {
  if (count === 0) {
    countedComputer = parseInt(line);
    count += 1;
    return;
  }
  if (count === 1) {
    countedLink = parseInt(line);
    count += 1;
    return;
  }
  virusMatrix.push(line.split(" ").map((el) => parseInt(el)));
  if (count === countedLink + 1) {
    rl.close();
  }
  count += 1;
});

rl.on("close", () => {
  let graph = Array.from(Array(countedComputer + 1), () => []);
  // 각 컴퓨터간 연결 정보를 담은 그래프 생성
  let visited = new Array(countedComputer + 1).fill(false);
  for (let i = 0; i < virusMatrix.length; i += 1) {
    const start = Number(virusMatrix[i][0]);
    const end = Number(virusMatrix[i][1]);
    graph[start].push(end);
    graph[end].push(start);
    // 주어진 컴퓨터 쌍으로 그래프 채우기
  }
  visited[1] = true; //1번 노드를 방문처리하고 시작(무조건 1번부터 감염되므로)
  function dfs(start) {
    for (let com of graph[start]) {
      if (!visited[com]) {
        visited[com] = true;
        answer += 1;
        dfs(com);
      }
      // 1번 노드에서 방문하여 dfs 실행
    }
  }
  dfs(1); // 1번 노드와 연결된 노드들만 얻으면 된다.
  console.log(answer);
  process.exit();
});
