from collections import deque

N = int(input())

matrix = [[] for _ in range(N + 1)]
visited = [0] * (N + 1)

for _ in range(N - 1):
    x, y = map(int, input().split())

    matrix[y].append(x)
    matrix[x].append(y)


def bfs():
    queue = deque([[matrix[1], 1]])
    visited[1] = -1
    while queue:
        nodes, v = queue.popleft()
        for i in nodes:
            if not visited[i]:
                queue.append([matrix[i], i])
                visited[i] = v


bfs()

for i in visited[2:]:
    print(i)
