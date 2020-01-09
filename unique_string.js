// INPUT: One line containing a String x
// OUTPUT: The First unique character found in the string in lowercase
// e.g input: racecars, output: e

function returnUniqueChar(string) {
  // if (typeof string !== 'string') return 'You have to provide a string';
  for (let i = 0; i < string.length; i++) {
    let s = string[i];
    if (string.indexOf(s) === string.lastIndexOf(s)) {
      console.log(s);
    }
  }
}

returnUniqueChar('racecar');

function get1stUnique(string) {
  const strCopy = string.toLowerCase();
  const uniqueChar = [...strCopy].find((char, index, arr) => {
    const arrCopy = [...arr];
    arrCopy.splice(index, 1);
    return !arrCopy.includes(char);
  });
  console.log(uniqueChar);
}

// get1stUnique('racecar');
