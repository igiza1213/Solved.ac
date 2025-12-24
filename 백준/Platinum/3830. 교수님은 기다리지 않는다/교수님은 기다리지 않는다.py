import sys

sys.setrecursionlimit(10**5)
input = sys.stdin.readline

while True:
    N, M = map(int, input().split())

    if N == 0 and M == 0:
        break

    def find(x):
        if parent[x] != x:
            p = parent[x]
            root = find(p)
            dist[x] += dist[p]
            parent[x] = root
        return parent[x]

    def union(a, b, w):
        ra = find(a)
        rb = find(b)
        if ra == rb:
            return

        parent[ra] = rb
        dist[ra] = dist[b] - dist[a] + w

    parent = list(range(N + 1))
    dist = [0] * (N + 1)

    for _ in range(M):
        flag = input().split()

        if flag[0] == "!":
            a, b, w = map(int, flag[1:])
            union(a, b, w)
        else:
            a, b = map(int, flag[1:])
            if find(a) != find(b):
                print("UNKNOWN")
            else:
                print(dist[a] - dist[b])
