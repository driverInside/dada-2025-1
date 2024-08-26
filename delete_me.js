/**
 * Sea un arreglo de números y retorna la suma total de todos
 * sus elementos
 *
 * n = longitud del arreglo
 */
function sumArray(arr) {
  // inicializar variables
  let contador = 0;
  let valor = 0;
  let suma = 0;
  // ciclo While
  while (contador < arr.length) {
    valor = arr[contador];
    suma = suma + valor;
    contador = contador + 1;
  }

  return suma;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([3, 2, 5, 6, 1])); // 17
