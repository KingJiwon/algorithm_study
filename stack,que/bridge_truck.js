function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0);
  const truck_crossed = [];
  let time = 0;
  let bridgeShift = null;
  while (true) {
    const bridgeWeight = bridge.reduce((acc, cur) => {
      return acc + cur;
    });
    if (bridgeWeight === 0 && truck_weights.length === 0) {
      break;
    }
    bridgeShift = bridge.shift();
    if (bridgeShift !== 0) {
      const shiftedBridgeWeight = bridge.reduce((acc, cur) => {
        return acc + cur;
      });
      truck_crossed.push(bridgeShift);
      if (shiftedBridgeWeight + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    } else {
      if (bridgeWeight + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }

    time += 1;

    console.log("truck_crossed :", truck_crossed);
    console.log("bridge :", bridge);
    console.log("truck_waitng :", truck_weights);
    console.log("time :", time);
  }
  return time;
}
