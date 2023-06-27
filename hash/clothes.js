function solution(clothes) {
  const object = {};
  const arr = [];
  clothes.map((el) => {
    if (object[el[1]]) {
      object[el[1]] += 1;
    } else {
      object[el[1]] = 1;
    }
  });
  for (let key in object) {
    arr.push(object[key]);
  }
  const answer =
    arr.reduce((acc, cur) => {
      return (acc *= cur + 1);
    }, 1) - 1;
  return answer;
}

// a + b + ab -> (a+1)*(b+1)-1
// a + b + ab + ac + bc + abc -> [(a+1)*(b+1)*(c+1)-1]
// {(x+1)*(y+1)*(z+1)-1}
