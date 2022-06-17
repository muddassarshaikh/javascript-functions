const depthFirstPrint1 = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const depthFirstPrint2 = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrint2(graph, neighbor);
  }
};
const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

// depthFirstPrint1(graph, 'a');
depthFirstPrint2(graph, 'a');
