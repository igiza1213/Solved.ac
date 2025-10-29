N, M = map(int, input().split())

parent = [i for i in range(N + 1)]


def find(x):
    if x == parent[x]:
        return x
    parent[x] = find(parent[x])
    return parent[x]


def same(a, b):
    return find(a) == find(b)


def union(a, b):
    a = find(a)
    b = find(b)
    parent[b] = a


for _ in range(M):
    f, a, b = map(int, input().split())

    if f == 0:
        union(a, b)
    else:
        print("YES" if same(a, b) else "NO")
