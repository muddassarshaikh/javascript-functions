function itemsSort(items) {
  const hashMap = {};

  for (let i = 0; i < items.length; i++) {
    if (!hashMap[items[i]]) {
      hashMap[items[i]] = 1;
    } else {
      hashMap[items[i]] = hashMap[items[i]] + 1;
    }
  }

  let sorted = Object.entries(hashMap).sort((a, b) => a[1] - b[1]);
  console.log('🚀 ~sorted', sorted);

  const obj = Object.fromEntries(sorted.map(([v, k]) => [k, v]));
  console.log('🚀 ~obj', obj);

  const newItemsArray = [];

  for (key in obj) {
    for (let i = 0; i < +key; i++) {
      newItemsArray.push(+obj[key]);
    }
  }

  return newItemsArray;
}

console.log('🚀', itemsSort([8, 5, 5, 5, 5, 5, 1, 1, 1, 4, 4]));
