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
 * Adding two minutes in string format
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
