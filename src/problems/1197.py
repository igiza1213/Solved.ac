V, E = map(int, input().split())
edges = [list(map(int, input().split())) for _ in range(E)]

edges.sort(key=lambda x: x[2])

parent = [i for i in range(V + 1)]
rank = [0] * (V + 1)


def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]


def union(a, b):
    a = find(a)
    b = find(b)
    if a == b:
        return False

    if rank[a] > rank[b]:
        parent[b] = a
    else:
        parent[a] = b
        if rank[a] == rank[b]:
            rank[b] += 1

    return True


ans = 0
cnt = 0

for u, v, w in edges:
    if union(u, v):
        ans += w
        cnt += 1
        if cnt == V - 1:
            break


print(ans)
