const checkWholeNumber = num => {
  return num.toString().split('.').length > 1 ? false : true;
};

console.log(checkWholeNumber(100));
