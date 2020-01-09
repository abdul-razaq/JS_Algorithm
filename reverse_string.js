// reverse the order of a string

function reverseString(string) {
  const result = string.split('').reverse().join('');
  console.log(result);
}

// reverseString('palindrome');

function reverseString2(string) {
  let reversed = '';
  for (const char of string) {
    reversed = char + reversed;
  }
  console.log(reversed);
}

// Third method
function reverseString3(string) {
  console.log(string.split('').reduce((rev, char) => char + rev, ''));
}

reverseString3('palindrome');
