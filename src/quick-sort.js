const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const [pivotElement, ...tail] = array;
  const lessThanPivot = tail.filter(item => item <= pivotElement);
  const greaterThanPivot = tail.filter(item => item > pivotElement);

  return [...quickSort(lessThanPivot), pivotElement, ...quickSort(greaterThanPivot)];
};

export default quickSort;
