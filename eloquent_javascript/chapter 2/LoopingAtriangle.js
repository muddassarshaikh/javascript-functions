/**
 * Write a loop that makes seven calls to console.log to output the following triangle:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

// Solution 1
for (let i = 0; i < 7; i++) {
  let string = '';
  for (let j = 0; j < i + 1; j++) {
    string = string + '#';
  }
  console.log(string);
}

// Solution 2
const print = (number) => {
  let string = '#';
  for (let i = 0; i < number; i++) {
    string = string + '#';
  }
  return string;
};

for (j = 0; j < 7; j++) {
  console.log(print(j));
}

// Solution 3
for (let line = '#'; line.length < 8; line += '#') {
  console.log(line);
}
