N, M = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(N)]

dp = [[0] * (N + 1) for _ in range(N + 1)]

for y in range(1, N + 1):
    for x in range(1, N + 1):
        dp[y][x] = dp[y - 1][x] + dp[y][x - 1] - dp[y - 1][x - 1] + matrix[y - 1][x - 1]

for _ in range(M):
    y1, x1, y2, x2 = map(int, input().split())
    print(dp[y2][x2] - dp[y1 - 1][x2] - dp[y2][x1 - 1] + dp[y1 - 1][x1 - 1])
