N = int(input())
a, b = map(int, input().split())
K = int(input())
orders = [int(input()) for _ in range(K)]

dp = {}


def dfs(left, right, i):
    if i == K:
        return 0
    if (left, right, i) in dp:
        return dp[(left, right, i)]

    t = orders[i]

    l = abs(t - left) + dfs(t, right, i + 1)

    r = abs(t - right) + dfs(left, t, i + 1)

    dp[(left, right, i)] = min(l, r)
    return dp[(left, right, i)]


print(dfs(a, b, 0))
