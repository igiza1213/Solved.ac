from collections import deque

N, M, V = map(int, input().split())
matrix = [[] for _ in range(N+1)]

for _ in range(M):
    x,y = map(int, input().split())
    
    matrix[x].append(y)
    matrix[y].append(x)


def dfs(v,visited):
    visited.append(v)
    for i in sorted(matrix[v]):
        if not i in visited:
            visited = dfs(i,visited)
    return visited


def bfs(v):
    queue = deque([v])
    visited = [v]
    while queue:
        v = queue.popleft()
        for i in sorted(matrix[v]):
            if not i in visited:
                visited.append(i)
                queue.append(i)
    return visited


print(*dfs(V, []))
print(*bfs(V))
