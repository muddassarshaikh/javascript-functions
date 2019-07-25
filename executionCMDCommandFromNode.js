let exec = require('child_process').exec;
let command = `mongorestore -d ${database} -c icdcodes /home/muddassar/Projects/Doxiva/dump/icdcodes.bson`;
exec(command, (err, stdout, stderr) => {});
