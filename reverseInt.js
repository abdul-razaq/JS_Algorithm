// Reverse Integer
function reverseInt(number) {
  const reversed = number
    .toString()
    .split('')
    .reverse()
    .join('');
  // if (number < 0) {
  //   return parseInt(reversed) * -1;
  // }
  return parseInt(reversed) * Math.sign(number);
  // return parseInt(reversed);
}

reverseInt(12345);
