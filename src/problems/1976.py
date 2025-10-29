N = int(input())
M = int(input())

parent = [i for i in range(N + 1)]


def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]


def union(a, b):
    a = find(a)
    b = find(b)
    if a != b:
        parent[b] = a


for i in range(1, N + 1):
    nodes = list(map(int, input().split()))
    for j in range(1, N + 1):
        if nodes[j - 1] == 1:
            union(i, j)

plan = list(map(int, input().split()))
root = find(plan[0])
print("YES" if all(find(city) == root for city in plan) else "NO")
