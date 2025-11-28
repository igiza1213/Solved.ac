N = int(input())

res = []


def dfs(num, l):

    res.append(num)

    for d in range(l - 1, -1, -1):
        dfs(num * 10 + d, d)


for i in range(10):
    dfs(i, i)

res.sort()

if N >= len(res):
    print(-1)
else:
    print(res[N])
