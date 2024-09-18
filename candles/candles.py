import sys

def candles(a: list[int]) -> int:
    """
    Args:
        a (list[int]): The candles heights.
    
    Returns:
        int: The number of candles that are tallest
    """
    max_value: int = -sys.maxsize
    counter: int = 0

    for i in range(len(a)):
        if a[i] > max_value:
            max_value = a[i]
            counter = 1
        elif a[i] == max_value:
            counter = counter + 1
            

    return counter    

if __name__ == "__main__":
    print(candles([4, 4, 1, 3])) # 2
    print(candles([1, 1, 1, 1, 1])) # 5
    print(candles([5, 3, 1, 3, 5, 3, 1, 3, 5])) # 3
    print(candles([10000, 10001, 10002, 10002, 10000])) # 2
    print(candles([999, 1000, 99, 912, 100])) # 1