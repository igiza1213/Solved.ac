import sys

sys.setrecursionlimit(10**5)

N, R, Q = map(int, input().split())

adj = [[] for _ in range(N + 1)]

for _ in range(N - 1):
    U, V = map(int, input().split())
    adj[U].append(V)
    adj[V].append(U)

size = [0] * (N + 1)


def dfs(u, parent):
    size[u] = 1
    for v in adj[u]:
        if v == parent:
            continue
        dfs(v, u)
        size[u] += size[v]


dfs(R, -1)

for _ in range(Q):
    u = int(input())
    print(size[u])
