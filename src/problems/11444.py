n = int(input())

MOD = 1_000_000_007


def mat_mul(X, Y):
    size = len(X)
    res = [[0] * size for _ in range(size)]

    for i in range(size):
        for k in range(size):
            for j in range(size):
                res[i][j] = (res[i][j] + X[i][k] * Y[k][j]) % MOD
    return res


def mat_pow(m, n):
    if n == 1:
        return m
    half = mat_pow(m, n // 2)
    res = mat_mul(half, half)
    if n % 2:
        res = mat_mul(res, m)
    return res


if n == 0:
    print(0)
else:
    matrix = [[1, 1], [1, 0]]
    res = mat_pow(matrix, n)
    print(res[0][1])
