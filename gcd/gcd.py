def max(a, b):
    if a > b:
        return a
    else:
        return b

def min(a, b):
    if a < b:
        return a
    return b

def gcd(a, b):
    mayor = max(a, b)
    menor = min(a, b)

    residuo = mayor - menor

    if residuo == 0:
        return menor
    else:
        return gcd(menor, residuo)

if __name__ == "__main__":
    print(gcd(105, 33)) # 3