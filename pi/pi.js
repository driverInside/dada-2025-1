function potencia(base, exp) {
  let pot = base;

  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }

  for (let i = 1; i < exp; i++) {
    pot = pot * base;    
  }

  return pot;
}


function gregory(num) {
  let a = 0;
  let sum = 0;

  for (let i = 0; i < num - 1; i++) {
    pot = potencia(-1, i);
    a = pot / ((2*i) +  1);
    sum += a;

  }

  return sum * 4;
}

console.log(potencia(3, 2));
console.log(gregory(200000));
