/**
 * Comparison of Timing should not overlap
 */

const oldStartTime = '03:00';
const oldEndTime = '23:00';

const newStartTime = '-01:00';
const newEndTime = '02:00';

const validate = (sTime, eTime) => {
  if (+getDate(sTime) < +getDate(eTime)) {
    return +getDate(oldEndTime) < +getDate(sTime) || +getDate(oldStartTime) > +getDate(eTime);
  } else {
    return false;
  }
};

function getDate(time) {
  var today = new Date();
  var _t = time.split(':');
  today.setHours(_t[0], _t[1], 0, 0);
  return today;
}

console.log(validate(newStartTime, newEndTime));

/**
 * Adding two minutes in string format (HH:MM)
 */

function addTimes(t0, t1) {
  return timeFromMins(timeToMins(t0) + timeToMins(t1));
}

function timeFromMins(mins) {
  function z(n) {
    return (n < 10 ? '0' : '') + n;
  }
  var h = ((mins / 60) | 0) % 24;
  var m = mins % 60;
  return z(h) + ':' + z(m);
}

function timeToMins(time) {
  time = time.toString();
  var b = time.split(':');
  return b[0] * 60 + +b[1];
}

console.log(addTimes(newStartTime, newEndTime));

/**
 * Converting the time from 12hr clock to 24hr clock
 */

function convertTime(time) {
  const timeDivision = time.split(':');
  const zone = timeDivision[2].substring(2, 4);

  if (zone.toUpperCase() === 'PM') {
    let hrs;
    if (timeDivision[0] == '12') {
      hrs = timeDivision[0];
    } else {
      hrs = +timeDivision[0] + 12;
    }
    return hrs + ':' + timeDivision[1] + ':' + timeDivision[2].substring(0, 2);
  } else {
    if (timeDivision[0] == '12') {
      return '00:' + timeDivision[1] + ':' + timeDivision[2].substring(0, 2);
    }
    return timeDivision[0] + ':' + timeDivision[1] + ':' + timeDivision[2].substring(0, 2);
  }
}
console.log(convertTime('07:05:45AM'));
