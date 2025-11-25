from collections import deque

N, M = map(int, input().split())
nodes = [[] for _ in range(N + 1)]
visited = [0] * (N + 1)

for _ in range(M):
    y, x = map(int, input().split())
    nodes[y].append(x)
    nodes[x].append(y)


def bfs(node):
    queue = deque([node])
    visited[node] = True
    while queue:
        node = queue.popleft()
        for v in nodes[node]:
            if not visited[v]:
                visited[v] = 1
                queue.append(v)


count = 0
for i in range(1, N + 1):
    if not visited[i]:
        bfs(i)
        count += 1

print(count)
