var convert = function (s, numRows) {
  if (numRows < 2) return s;
  let result = [];
  let rowNo = 0,
    direction = 1;

  for (i = 0; i < s.length; i++) {
    result[rowNo] ? (result[rowNo] += s[i]) : (result[rowNo] = s[i]);
    rowNo += direction;
    if (rowNo > 0 && rowNo % numRows === 0) {
      rowNo = numRows - 2;
      direction = -1;
    }
    if (rowNo < 0) {
      rowNo = 1;
      direction = 1;
    }
  }

  return result.reduce((a, b) => a + b);
};

result = convert("PAYPALISHIRING", 3);
console.log(result);

const reverse = x => {
  result = (x + "")
    .split("")
    .reverse()
    .reduce((a, b) => (a === "0" ? b : a + b));
  result =
    result[result.length - 1] === "-" ? "-" + result.slice(0, -1) : result;
  // (+a | 0) == a;
  return (+result | 0) == result ? result : 0;
};
console.log(reverse(1222222222277999));
