T = int(input())

# 1 = 1
# 2 = 2
# 3 = 4
# 4 = 7
# 5 = 13
# 6 = 24
# 7 = 44

# n = dp(n-1) + dp(n-2) + dp(n-3)

memo = [-1] * 12
memo[0], memo[1], memo[2], memo[3] = 0, 1, 2, 4

def dp(n):
    if memo[n] != -1:
        return memo[n]
    memo[n] = dp(n - 1) + dp(n - 2) + dp(n - 3)
    return memo[n]


for _ in range(T):
    n = int(input())

    print(dp(n))
