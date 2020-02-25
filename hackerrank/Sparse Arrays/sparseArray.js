const matchingStrings = (strings, queries) => {
  const comp = {};
  for (let i = 0; i < strings.length; i++) {
    if (comp[strings[i]]) {
      comp[strings[i]]++;
    } else {
      comp[strings[i]] = 1;
    }
  }
  const arr = [];
  for (i = 0; i < queries.length; i++) {
    arr.push(comp[queries[i]] || 0);
  }

  return arr.join('\n');
};

console.log(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh']));
