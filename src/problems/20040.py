import sys

sys.setrecursionlimit(10**6)
input = sys.stdin.readline


N, M = map(int, input().split())

parent = [i for i in range(0, N)]
rank = [0] * N


def find(x):
    if x != parent[x]:
        parent[x] = find(parent[x])
    return parent[x]


def union(a, b):
    a = find(a)
    b = find(b)
    if a == b:
        return

    if rank[a] > rank[b]:
        parent[b] = a
    else:
        parent[a] = b
        if rank[a] == rank[b]:
            rank[b] += 1


for i in range(M):
    a, b = map(int, input().split())
    if find(a) == find(b):
        print(i + 1)
        break
    union(a, b)
else:
    print(0)
