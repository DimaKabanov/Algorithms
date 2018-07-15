
const binarySearch = (list, item) => {
  const listLength = list.length;

  if (listLength === 0) {
    return null;
  }

  const iter = (small, high) => {
    if (small > high) {
      return null;
    }

    const middleItem = Math.floor((small + high) / 2);
    const currentItem = list[middleItem];

    if (currentItem === item) {
      return middleItem;
    } else if (currentItem > item) {
      return iter(small, middleItem - 1);
    }

    return iter(middleItem + 1, high);
  };

  const smallestIndex = 0;
  const highestIndex = listLength - 1;

  return iter(smallestIndex, highestIndex);
};

export default binarySearch;
