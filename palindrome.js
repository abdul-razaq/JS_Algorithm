function palindrome(string) {
  const reversed = string
    .split('')
    .reverse()
    .join('');
  return string === reversed;
}

function palindrome2(string) {
  return string.split('').every((char, i) => {
    return char === string[string.length - i - 1];
  });
}

palindrome2('palindrome');

// palindrome('palindrome');
