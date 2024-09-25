def digits(n: int) -> int:
    counter = 0

    while n > 0:
        n = n // 10
        counter += 1

    if counter == 0:
        return 1
    
    return counter

    # return 1 if counter == 0 else counter

if __name__ == "__main__":
    print(digits(317)) # 3
    print(digits(11111)) # 5
    print(digits(0)) # 1
    print(digits(17)) # 2
