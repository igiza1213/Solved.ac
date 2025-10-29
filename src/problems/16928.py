from collections import deque

N, M = map(int, input().split())
matrix = [[] for _ in range(101)]

for _ in range(N):
    x, y = map(int, input().split())

    matrix[x].append(y)

for _ in range(M):
    x, y = map(int, input().split())

    matrix[x].append(y)


def bfs(v):
    queue = deque([(v, 0)])
    visited = [0 for _ in range(101)]
    while queue:
        v, cnt = queue.popleft()
        for i in range(1, 7):
            nv = v + i
            if nv <= 100 and len(matrix[nv]):
                if visited[matrix[nv][0]] == 0:
                    visited[matrix[nv][0]] = cnt + 1
                queue.append([matrix[nv][0], cnt + 1])
            elif nv <= 100 and visited[nv] == 0:
                visited[nv] = cnt + 1
                queue.append([nv, cnt + 1])

            if nv == 100:
                queue = []

    return cnt + 1


print(bfs(1))
