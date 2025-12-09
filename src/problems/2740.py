N, M = map(int, input().split())

A = [list(map(int, input().split())) for _ in range(N)]

M, K = map(int, input().split())

B = [list(map(int, input().split())) for _ in range(M)]

def matmul(X, Y):
    N = len(X)
    M = len(X[0])
    K = len(Y[0])

    res = [[0] * K for _ in range(N)]

    for i in range(N):
        for j in range(K):
            for k in range(M):
                res[i][j] += X[i][k] * Y[k][j]
    return res

res = (matmul(A,B))

for row in res:
    print(*row)
