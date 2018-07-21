import _ from 'lodash';

const findSmallestIndex = (array) => {
  const smallestItem = _.min(array);
  return array.findIndex(item => item === smallestItem);
};

const sortingByChoice = (array) => {
  const iter = (unsortedArray, acc) => {
    if (unsortedArray.length === 0) {
      return acc;
    }

    const smallestIndex = findSmallestIndex(unsortedArray);
    const smallestItem = unsortedArray[smallestIndex];
    const arrWithoutSmallestIndex = unsortedArray.filter((item, index) => index !== smallestIndex);
    const newAcc = [smallestItem, ...acc];

    return iter(arrWithoutSmallestIndex, newAcc);
  };

  return iter(array, []);
};

export default sortingByChoice;
