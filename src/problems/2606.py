from collections import deque

N = int(input())
M = int(input())

matrix = [[] for _ in range(N + 1)]

for _ in range(M):
    x, y = map(int, input().split())
    matrix[y].append(x)
    matrix[x].append(y)

visited = [0] * (N + 1)


def bfs():
    result = 0
    queue = deque([1])
    visited[1] = 1
    while queue:
        i = queue.popleft()
        for v in matrix[i]:
            if not visited[v]:
                visited[v] = 1
                queue.append(v)
                result += 1
    return result

print(bfs())
