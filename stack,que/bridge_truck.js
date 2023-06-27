function solution(bridge_length, weight, truck_wating) {
  const bridge = new Array(bridge_length).fill(0);
  const truck_crossed = [];
  let time = 0;
  let bridgeWeight = 0;
  while (true) {
    const bridgeShift = bridge.shift();
    bridgeWeight = bridge.reduce((acc, cur) => {
      return acc + cur;
    });

    if (bridgeShift !== 0 && bridgeWeight + truck_wating[0] <= weight) {
      // 다리에서 빠져나간 트럭이 있고 다음 트럭이 들어올 수 있을 떄 빠져나간 트럭을 완료 트럭 배열에 넣고 대기 트럭을 다리에 올린다.
      truck_crossed.push(bridgeShift);
      bridge.push(truck_wating.shift());
    } else if (
      bridgeShift !== 0 &&
      (bridgeWeight + truck_wating[0] > weight || truck_wating.length === 0)
    ) {
      // 다리에서 빠져나간 트럭이 있고 다음 트럭이 들어올 수 없거나 기다리는 트럭이 없을 때 빠져나간 트럭을 완료 트럭 배열에 넣고 다리에 빈자리인 0을 넣는다.
      truck_crossed.push(bridgeShift);
      bridge.push(0);
    } else if (bridgeShift === 0 && bridgeWeight + truck_wating[0] <= weight) {
      // 다리에서 빠져나간 트럭이 없고 다음 트럭이 들어올 수 있을 때 대기 트럭을 shift한 후 다리에 올린다.
      bridge.push(truck_wating.shift());
    } else if (
      bridgeShift === 0 &&
      (bridgeWeight + truck_wating[0] > weight || truck_wating.length === 0)
    ) {
      // 다리에서 빠져나간 트럭이 없고 다음 트럭이 들어올 수 없거나 기다리는 트럭이 없을 때 다리에 빈자리인 0을 넣는다.
      bridge.push(0);
    }
    time += 1;

    bridgeWeight = bridge.reduce((acc, cur) => {
      return acc + cur;
    });

    if (bridgeWeight === 0 && truck_wating.length === 0) {
      // 이동이 완료 된 후 다리의 무게를 측정했을 때 무게가 0이고 대기트럭이 없으면(트럭이 다 옮겨졌을 때) 종료한다.
      break;
    }
  }
  return time;
}
