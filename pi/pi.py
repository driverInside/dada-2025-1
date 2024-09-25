def potencia(base, exp):
    pot = base
    
    if exp == 0:
        return 1
    
    if exp == 1:
        return base
    
    for i in range(1, exp):
        pot = pot * base

    return pot

def gregory(num: int) -> float:
    a = 0
    sum = 0

    for i in range(0, num - 1):
        pot = potencia(-1, i)
        a = pot / ((2 * i) + 1 )
        sum = sum + a

    return sum * 4

if __name__ == "__main__":
    print(potencia(3, 2)) # 9
    print(gregory(200000))
