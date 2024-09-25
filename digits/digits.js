/**
 * digits
 * Devuelve el número de dígitos que un número.
 * @param {number} n un número positivo n.
 * @return {number} El número de dígitos que tiene n.
 */
function digits(n) {
  let counter = 0;

  while (n > 0) {
    n = parseInt(n / 10);
    counter += 1;  // counter++   counter = counter + 1
  }

  if (counter === 0) {
    return 1;
  }
  return counter;

  return counter === 0? 1: counter;
}

console.log(digits(317)); // 3
console.log(digits(11111)); // 5
console.log(digits(0)); // 1
console.log(digits(17)); // 2
