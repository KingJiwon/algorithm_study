function solution(bridge_length, weight, truck_weights) {
  const crossingBridge = [];
  const crossedBridge = [];
  let time = 0;
  while (truck_weights.length !== 0) {
    const shift = truck_weights.shift();
    const push = crossingBridge.push(shift);
    console.log("Waiting :", truck_weights);
    console.log("Crossing :", crossingBridge);
    const shiftTwo = crossingBridge.shift();
    const pushTwo = crossedBridge.push(shiftTwo);
    console.log("Crossed :", crossedBridge);
  }
}
solution(2, 10, [7, 4, 5, 6]);
