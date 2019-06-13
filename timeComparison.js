/**
 * Comparison of Timing should not overlap
 */

const oldStartTime = "08:00";
const oldEndTime = "12:30";

const newStartTime = "12:29";
const newEndTime = "18:30";

const validate = (sTime, eTime) => {
  if (+getDate(sTime) < +getDate(eTime)) {
    return +getDate(oldEndTime) < +getDate(sTime) || +getDate(oldStartTime) > +getDate(eTime);
  } else {
    return false;
  }
};

function getDate(time) {
  var today = new Date();
  var _t = time.split(":");
  today.setHours(_t[0], _t[1], 0, 0);
  return today;
}

console.log(validate(newStartTime, newEndTime));
