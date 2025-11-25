N, M = map(int, input().split())
arr = list(map(int, input().split()))

sigma = [0] * (N + 1)
for i in range(1, N + 1):
    sigma[i] = sigma[i - 1] + arr[i - 1]

for _ in range(M):
    x,y = map(int, input().split())

    print(sigma[y] - sigma[x-1])
