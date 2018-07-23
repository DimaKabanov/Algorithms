const personIsSeller = name => name === 'thom';

const breadthSearch = (graph, name) => {
  const iter = (deque, searched) => {
    if (deque.length === 0) {
      return false;
    }

    const [person, ...tail] = deque;

    if (searched.includes(person)) {
      return iter(tail, searched);
    }

    if (personIsSeller(person)) {
      return person;
    }

    const newDeque = [...tail, ...graph.get(person)];
    const newSearched = [...searched, person];

    return iter(newDeque, newSearched);
  };

  return iter(graph.get(name), []);
};

export default breadthSearch;
