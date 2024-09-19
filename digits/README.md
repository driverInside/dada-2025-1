# Digits

## Problema

Escribir una función que tome como parámetro un número entero positivo __n__ y regrese el número de dígitos de dicho entero.

__Ejemplo__

```
n = 317
```

El número 317 tiene tres dígitos (3, 1 y 7) por lo que la función debería regresar 3.

## Descripción

Completa la función `digits`.

`digits` tiene un parámetro:

- int n: Un número positivo entero.

__Regresa__

- int: el número de dígitos que tiene el número n.

__Condiciones__

- 1 <= n <= 10<sup>5</sup>

## Instrucciones

Dentro de la carpeta hay dos archivos: `digits.py` y `digits.js`. __Elegir solamente uno__.

### Python

El archivo `digits.py` tiene una función definida llamada `digits` que debe de ser completada para que regrese los valores esperados. Asegurarse de eliminar la instrucción `pass` cuando se termine.

```python
def digits(n: int) -> int:
    # your code here
    pass
```

También se incluyen algunas pruebas con los valores esperados como comentarios y no deben de modificarse.

```python
    print(digits(317)) # 3
    print(digits(11111)) # 5
    print(digits(0)) # 1
    print(digits(17)) # 2
```

Para poder ejecutar el archivo `digits.py`, se debe de tener instalado python. Se puede descargar de su [sitio oficial](https://www.python.org/).


```bash
python3 digits.py
```

### Javascript

El archivo `digits.js` tiene una función definida llamada `digits` que debe de ser completada para que regrese los valores esperados.

```javascript
function digits(n) {
  // your code here
}
```

Para poder ejecutar el archivo `digits.js`, se debe de tener instalado el runtime de Node. Se puede descargar de su [sitio oficial](https://nodejs.org).

```bash
node digits.js
```
