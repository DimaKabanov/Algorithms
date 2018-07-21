import sortingByChoice from '../src/sorting-by-choice';

test('sorting by choice in descending order', () => {
  expect(sortingByChoice([])).toBeNull();
  expect(sortingByChoice([9])).toEqual([9]);
  expect(sortingByChoice([3, 8])).toEqual([8, 3]);
  expect(sortingByChoice([1, 2, 3, 4, 5, 6, 7])).toEqual([7, 6, 5, 4, 3, 2, 1]);
  expect(sortingByChoice([2, 5, 2, 7, 9, 0, 1])).toEqual([9, 7, 5, 2, 2, 1, 0]);
});
