T = int(input())

for _ in range(T):
    N = int(input())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))

    if N == 1:
        print(max(a[0], b[0]))
        continue

    dp = [[0] * 2 for _ in range(N)]

    dp[0][0] = a[0]
    dp[0][1] = b[0]

    dp[1][0] = b[0] + a[1]
    dp[1][1] = a[0] + b[1]

    for i in range(2, N):
        dp[i][0] = max(dp[i - 1][1], dp[i - 2][1]) + a[i]
        dp[i][1] = max(dp[i - 1][0], dp[i - 2][0]) + b[i]

    print(max(dp[N - 1][1], dp[N - 1][0]))
