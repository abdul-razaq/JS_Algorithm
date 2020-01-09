function fizzbuzz(num) {
  for (let i = 0; i < num.length; i++) {
    if (i % 3 && 1 % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else if (i % 5 === 0) {
      console.log('Fuzz');
    }
  }
}

fizzbuzz(100);
