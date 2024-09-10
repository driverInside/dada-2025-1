# Candles

## Problema

Eres el responsable del pastel de cumpleaños de un niño. Has decidido que el pastel tendrá una vela por cada año de su edad total. Solo podrán soplar las velas más altas. Cuenta cuántas velas son las más altas.

__Example__

```
candles = [4, 4, 1, 3]
```
El valor más grande de las velas es 4. Hay dos de ellas por lo que se debe regresar 2.

## Descripción

Completa la función `candles`.

`candles` tiene los siguientes parámetros

- int candles[n]: Las alturas de las velas.

__Regresa__

- int: el número de velas que son más altas.

__Condiciones__

- 1 <= n <= 10<sup>5</sup>
- 1 <= candles[i] <= 10<sup>5</sup>

## Instrucciones

Dentro de la carpeta hay dos archivos: `candles.py` y `candles.js`. __Elegir solamente uno__.

### Python

El archivo `candles.py` tiene una función definida llamada `candles` que debe de ser completada para que regrese los valores esperados. Asegurarse de eliminar la instrucción `pass` cuando se termine.

```python
def candles(a: list[int]) -> int:
    # your code here
    pass
```

También se incluyen algunas pruebas con los valores esperados como comentarios y no deben de modificarse.

```python
    print(candles([4, 4, 1, 3])) # 2
    print(candles([1, 1, 1, 1, 1])) # 5
```

Para poder ejecutar el archivo `candles.py`, se debe de tener instalado python. Se puede descargar de su [sitio oficial](https://www.python.org/).


```bash
python3 candles.py
```

### Javascript

El archivo `candles.js` tiene una función definida llamada `candles` que debe de ser completada para que regrese los valores esperados.

```javascript
function candles(arr) {
  // your code here
}
```

Para poder ejecutar el archivo `candles.js`, se debe de tener instalado el runtime de Node. Se puede descargar de su [sitio oficial](https://nodejs.org).

```bash
node candles.js
```
