function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(1));  // 1
console.log(factorial(2));  // 2
console.log(factorial(3));  // 6
console.log(factorial(4));  // 24
console.log(factorial(5));  // 120
