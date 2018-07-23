import breadthSearch from '../src/breadth-search';

const graph = new Map();

graph.set('you', ['alice', 'bob', 'claire']);
graph.set('bob', ['anuj', 'peggy']);
graph.set('alice', ['peggy']);
graph.set('claire', ['thom', 'jonny']);
graph.set('anuj', []);
graph.set('peggy', []);
graph.set('thom', []);
graph.set('jonny', []);

test('quick sort in ascending order', () => {
  expect(breadthSearch(new Map([['you', []]]), 'you')).toBeFalsy();
  expect(breadthSearch(graph, 'you')).toBe('thom');
});
