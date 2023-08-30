var generate = function (numRows) {
  let rows = [];
  rows.push([1]);
  for (var i = 1; i < numRows; i++) {
    let newRow = [];
    let prevRow = rows[i - 1];
    newRow.push(prevRow[0]);
    for (var j = 0; j < prevRow.length - 1; j++) {
      newRow.push(prevRow[j] + prevRow[j + 1]);
    }
    newRow.push(prevRow[prevRow.length - 1]);
    rows.push(newRow);
  }
  return rows;
};
let res = generate(5);
console.log(res);
