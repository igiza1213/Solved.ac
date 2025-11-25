N, B = map(int, input().split())

A = [list(map(int, input().split())) for _ in range(N)]

MOD = 1000


def matmul(X, Y):
    size = len(X)
    res = [[0] * size for _ in range(size)]

    for i in range(size):
        for k in range(size):
            for j in range(size):
                res[i][j] = (res[i][j] + X[i][k] * Y[k][j]) % MOD
    return res


def matpow(A, power):
    size = len(A)

    # 항등행렬 I
    result = [[1 if i == j else 0 for j in range(size)] for i in range(size)]

    base = A
    while power > 0:
        if power & 1:  # % 2 == 1
            result = matmul(result, base)
        base = matmul(base, base)
        power >>= 1  # //= 2
    return result


res = matpow(A, B)

for row in res:
    print(*row)
