const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let paintings_matrix = [];
let paintings = [];
let count = 0;

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
  process.exit();
});
