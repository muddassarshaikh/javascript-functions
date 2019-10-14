const mergeObject = (a, b) => {
  Object.assign(a, b);
  return a;
};

const obj1 = {
  menus: [{ z: 20, roleAdd: false }]
};

const obj2 = {
  x: 10,
  y: 20,
  menus: [{ z: 20, role: true }]
};

console.log(mergeObject(obj1, obj2));
