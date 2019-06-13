const object = {
  mode: 'auto',
  module: {
    id: 'engine',
    name: 'Engine2-MUX2',
    property: {
      cylinder: {
        bank: [[1, 3, 5], [2, 4, 6]],
        firingOrder: [1, 2, 3, 4, 5, 6],
        label: ['L1', 'R2', 'L3', 'R4', 'L5', 'R6'],
        pair: [[1, 4], [2, 5], [3, 6]]
      },
      fuel: 'diesel',
      nStroke: 2,
      phaseShift: {
        type: 0,
        value: 0
      }
    }
  },
  report: {
    date: 1559556196,
    result: {
      indicator: {
        Bearing: [33, 42, 44, 100, 100, 100, 33],
        'Harmonic Damper': 57,
        'Injection & Combustion': [1, 13, 16, 100, 100, 100, 0],
        'Mechanical Health': 62,
        'Mechanical Stresses': 71,
        Mounts: 75,
        'Operating Condition': 50,
        'Power Loss': 2.1389300823212,
        'Torsional Angle': 100
      },
      sync: 'none'
    },
    speed: {
      delta: 0.58544921875,
      max: 1039.9794921875,
      min: 1039.3940429688,
      nom: 1039.7619628906
    }
  },
  systemName: 'Example'
};

function flatten(object, path = '', res = undefined) {
  if (!Array.isArray(res)) {
    res = [];
  }
  if (object !== null && typeof object === 'object') {
    if (Array.isArray(object)) {
      for (let i = 0; i < object.length; i++) {
        flatten(object[i], path + '_' + i, res);
      }
    } else {
      const keys = Object.keys(object);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        flatten(object[key], path ? path + '_' + key : key, res);
      }
    }
  } else {
    if (path) {
      res[path] = object;
    }
  }
  return res;
}
console.log('TCL: flatten -> flatten', flatten(object));
