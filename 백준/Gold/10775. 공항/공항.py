import sys

input = sys.stdin.readline


G = int(input())
P = int(input())

arr = [int(input()) for _ in range(P)]


def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]


def union(a, b):
    a = find(a)
    b = find(b)
    if a == b:
        return

    parent[a] = b


parent = list(range(G + 1))

cnt = 0
for f in arr:
    p = find(f)
    if p == 0:
        break
    union(p, p - 1)
    cnt += 1

print(cnt)
