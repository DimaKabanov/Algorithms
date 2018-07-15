import binarySearch from '../src/binary-search';

test('binary search', () => {
  expect(binarySearch([], 5)).toBeNull();
  expect(binarySearch([9], 5)).toBeNull();
  expect(binarySearch([1, 2, 3, 4, 6, 7, 8], 5)).toBeNull();
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5)).toBe(4);
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1)).toBe(0);
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)).toBe(7);
  expect(binarySearch([1, 2, 3, 5, 6, 7], 2)).toBe(1);
  expect(binarySearch([3, 5], 3)).toBe(0);
  expect(binarySearch([5], 5)).toBe(0);
});
