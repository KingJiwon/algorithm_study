function solution(clothes) {
  const countObject = {};
  const countArr = [];
  clothes.map((el) => {
    if (countObject[el[1]]) {
      countObject[el[1]] += 1;
    } else {
      countObject[el[1]] = 1;
    }
  });
  for (let key in countObject) {
    countArr.push(countObject[key]);
  }
  const answer =
    countArr.reduce((acc, cur) => {
      return (acc *= cur + 1);
    }, 1) - 1;
  return answer;
}

// a + b + ab -> (a+1)*(b+1)-1
// a + b + ab + ac + bc + abc -> [(a+1)*(b+1)*(c+1)-1]
// {(x+1)*(y+1)*(z+1)-1}
