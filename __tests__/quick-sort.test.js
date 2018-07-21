import quickSort from '../src/quick-sort';

test('quick sort in ascending order', () => {
  expect(quickSort([])).toEqual([]);
  expect(quickSort([9])).toEqual([9]);
  expect(quickSort([8, 3])).toEqual([3, 8]);
  expect(quickSort([5, 5, 1, 4, 5, 0, 83, 2, 9])).toEqual([0, 1, 2, 4, 5, 5, 5, 9, 83]);
  expect(quickSort([2, 5, 2, 7, 9, 0, 1])).toEqual([0, 1, 2, 2, 5, 7, 9]);
});
