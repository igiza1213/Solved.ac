N, M = map(int, input().split())

matrix = [list(input().strip()) for _ in range(N)]

parent = [i for i in range(N * M)]

dir = {"U": (-1, 0), "D": (1, 0), "L": (0, -1), "R": (0, 1)}


def find(x):
    root = x
    while root != parent[root]:
        root = parent[root]
    while x != root:
        parent[x], x = root, parent[x]
    return root


def union(a, b):
    a = find(a)
    b = find(b)
    if a != b:
        parent[b] = a


for i in range(N):
    for j in range(M):
        dx, dy = dir[matrix[i][j]]
        nx, ny = i + dx, j + dy

        a = i * M + j
        b = nx * M + ny

        union(a, b)

roots = set(find(i) for i in range(N * M))
print(len(roots))
