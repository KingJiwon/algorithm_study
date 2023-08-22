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
  console.log(count);
  console.log(childArr);
  process.exit();
});
