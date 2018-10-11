function binarySearch(array, value, start=0, end=array.length-1, count=0) {
  // var start = start === undefined ? 0 : start;
  // var end = end === undefined ? array.length : end;

  if (start > end) {
    return {index: -1, count};
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  if (item == value) {
    count++;
    return {index, count};
  }
  else if (item < value) {
    count++;
    return binarySearch(array, value, index + 1, end, count);
  }
  else if (item > value) {
    count++;
    return binarySearch(array, value, start, index - 1, count);
  }
};

module.exports = binarySearch;