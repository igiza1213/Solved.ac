C, N = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]

INF = 10**9
dp = [INF] * (C + 101)
dp[0] = 0


for cost, people in arr:
    for p in range(people, C + 101):
        dp[p] = min(dp[p], dp[p - people] + cost)

print(min(dp[C:]))
