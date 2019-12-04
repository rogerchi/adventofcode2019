const isValidPassword = require("./isValidPassword");

const range = [353096, 843212];

const validPasswords = [];

for (let i = range[0]; i <= range[1]; i++) {
  if (isValidPassword(i, range)) {
    validPasswords.push(i);
  }
}

console.log(validPasswords.length);
