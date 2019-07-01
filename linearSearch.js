const linearSearch = (array, index, searchnumber) => {
  if (array[index] === searchnumber) {
    return index;
  } else if (array.length <= index) {
    return 'Not Found';
  } else {
    return linearSearch(array, ++index, searchnumber)
  }
}

console.log(linearSearch([23,54,23,44,345,7], 0, 24))