n = int(input())

# n = dp(n-1) + dp(n-2)

memo = {0: 0, 1: 1, 2: 2}


def dp(n):
    if n in memo:
        return memo[n]
    memo[n] = (dp(n - 1) + dp(n - 2)) % 10007
    return memo[n]


print(dp(n))
